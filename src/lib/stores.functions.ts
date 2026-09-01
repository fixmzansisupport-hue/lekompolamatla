import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { STORES } from "./stores";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

function gatewayHeaders() {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const mapsKey = process.env["GOOGLE_MAPS_API_KEY"];
  if (!lovableKey || !mapsKey) throw new Error("Google Maps connector credentials are not configured");
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": mapsKey,
  };
}

async function checkResponse(response: Response, label: string) {
  if (response.ok) return;
  const body = await response.text();
  console.error(`${label} failed [${response.status}]: ${body}`);
  if (response.status === 403) {
    throw new Error("Google Maps request was denied (403). Check the API key restrictions in Google Cloud Console.");
  }
  throw new Error(`${label} failed [${response.status}]: ${body}`);
}

let coordsCache: Record<string, { lat: number; lng: number }> | null = null;

export const geocodeStores = createServerFn({ method: "GET" }).handler(async () => {
  if (coordsCache) return coordsCache;
  const result: Record<string, { lat: number; lng: number }> = {};
  for (const store of STORES) {
    const response = await fetch(
      `${GATEWAY_URL}/maps/api/geocode/json?address=${encodeURIComponent(store.address)}`,
      { headers: gatewayHeaders() },
    );
    await checkResponse(response, "Geocoding");
    const data = (await response.json()) as {
      results?: Array<{ geometry: { location: { lat: number; lng: number } } }>;
    };
    const loc = data.results?.[0]?.geometry?.location;
    if (!loc) throw new Error(`Could not geocode address: ${store.address}`);
    result[store.id] = { lat: loc.lat, lng: loc.lng };
  }
  coordsCache = result;
  return result;
});

export const getRouteToStore = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        storeId: z.string(),
        originLat: z.number().min(-90).max(90),
        originLng: z.number().min(-180).max(180),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const coords = await geocodeStores();
    const dest = coords[data.storeId];
    if (!dest) throw new Error("Unknown store");

    const response = await fetch(`${GATEWAY_URL}/routes/directions/v2:computeRoutes`, {
      method: "POST",
      headers: {
        ...gatewayHeaders(),
        "Content-Type": "application/json",
        "X-Goog-FieldMask":
          "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline,routes.legs.steps.navigationInstruction,routes.legs.steps.distanceMeters,routes.legs.steps.startLocation,routes.legs.steps.endLocation",
      },
      body: JSON.stringify({
        origin: { location: { latLng: { latitude: data.originLat, longitude: data.originLng } } },
        destination: { location: { latLng: { latitude: dest.lat, longitude: dest.lng } } },
        travelMode: "DRIVE",
      }),
    });
    await checkResponse(response, "Routes");
    const json = (await response.json()) as {
      routes?: Array<{
        duration?: string;
        distanceMeters?: number;
        polyline?: { encodedPolyline?: string };
        legs?: Array<{
          steps?: Array<{
            navigationInstruction?: { instructions?: string };
            distanceMeters?: number;
            startLocation?: { latLng?: { latitude: number; longitude: number } };
            endLocation?: { latLng?: { latitude: number; longitude: number } };
          }>;
        }>;
      }>;
    };
    const route = json.routes?.[0];
    if (!route) throw new Error("No route found to this store");

    return {
      duration: route.duration ?? null,
      distanceMeters: route.distanceMeters ?? null,
      encodedPolyline: route.polyline?.encodedPolyline ?? null,
      steps: (route.legs?.[0]?.steps ?? []).map((s) => ({
        instruction: s.navigationInstruction?.instructions ?? "Continue",
        distanceMeters: s.distanceMeters ?? 0,
        start: s.startLocation?.latLng
          ? { lat: s.startLocation.latLng.latitude, lng: s.startLocation.latLng.longitude }
          : null,
      })),
      destination: dest,
    };
  });
