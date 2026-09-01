import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { Suspense, lazy, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Navigation, Loader2, ExternalLink, LocateFixed } from "lucide-react";
import { STORES, googleMapsDirectionsUrl, type StoreWithCoords } from "@/lib/stores";
import { geocodeStores, getRouteToStore } from "@/lib/stores.functions";
import { toast } from "sonner";

const StoreMap = lazy(() => import("@/components/site/StoreMap"));

export const Route = createFileRoute("/stores")({
  head: () => ({
    meta: [
      { title: "Store Locations — Lekompo La Matla" },
      { name: "description", content: "Find Lekompo La Matla stores in Ivory Park and Johannesburg. Get turn-by-turn directions." },
      { property: "og:title", content: "Store Locations — Lekompo La Matla" },
      { property: "og:description", content: "Visit us in Ivory Park or Johannesburg. Get directions to your nearest Lekompo La Matla store." },
    ],
  }),
  component: StoresPage,
});

interface RouteResult {
  duration: string | null;
  distanceMeters: number | null;
  encodedPolyline: string | null;
  steps: Array<{ instruction: string; distanceMeters: number; start: { lat: number; lng: number } | null }>;
}

function formatDistance(m: number) {
  return m < 1000 ? `${m} m` : `${(m / 1000).toFixed(1)} km`;
}

function formatDuration(d: string) {
  const secs = parseInt(d.replace("s", ""), 10);
  if (Number.isNaN(secs)) return d;
  const mins = Math.round(secs / 60);
  return mins < 60 ? `${mins} min` : `${Math.floor(mins / 60)} h ${mins % 60} min`;
}

function StoresPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [route, setRoute] = useState<RouteResult | null>(null);
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(null);
  const [loadingRoute, setLoadingRoute] = useState(false);

  const { data: coords } = useQuery({
    queryKey: ["store-coords"],
    queryFn: () => geocodeStores(),
    staleTime: Infinity,
  });

  const stores: StoreWithCoords[] = coords
    ? STORES.map((s) => ({ ...s, ...(coords[s.id] ?? { lat: 0, lng: 0 }) })).filter((s) => coords[s.id])
    : [];

  const getDirections = (storeId: string) => {
    setSelectedId(storeId);
    setRoute(null);
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }
    setLoadingRoute(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const o = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setOrigin(o);
        try {
          const result = await getRouteToStore({ data: { storeId, originLat: o.lat, originLng: o.lng } });
          setRoute(result);
        } catch (err) {
          console.error(err);
          toast.error("Could not compute directions. Try the Google Maps link instead.");
        } finally {
          setLoadingRoute(false);
        }
      },
      () => {
        setLoadingRoute(false);
        toast.error("Location access denied — showing the store on the map. Allow location access for turn-by-turn directions.");
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Find Us</div>
      <h1 className="font-display mt-2 text-4xl uppercase tracking-wide sm:text-5xl">Store Locations</h1>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">
        Visit Lekompo La Matla in person. Tap a store to see it on the map, or get turn-by-turn directions from your location.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {STORES.map((store) => {
            const active = selectedId === store.id;
            return (
              <div
                key={store.id}
                className={`rounded-2xl border bg-card p-5 transition ${
                  active ? "border-primary shadow-[var(--shadow-blood)]" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedId(store.id);
                    setRoute(null);
                  }}
                  className="block w-full text-left"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className={`mt-1 h-5 w-5 shrink-0 ${active ? "text-primary" : "text-muted-foreground"}`} />
                    <div>
                      <div className="font-display text-xl uppercase tracking-wide">{store.name}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{store.address}</div>
                    </div>
                  </div>
                </button>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => getDirections(store.id)}
                    disabled={loadingRoute && active}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground transition hover:scale-[1.03] disabled:opacity-60"
                  >
                    {loadingRoute && active ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Navigation className="h-3.5 w-3.5" />}
                    Get Directions
                  </button>
                  <a
                    href={googleMapsDirectionsUrl(store.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Open in Google Maps
                  </a>
                </div>
              </div>
            );
          })}

          {route && (
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                <LocateFixed className="h-4 w-4" /> Your Route
              </div>
              {(route.distanceMeters || route.duration) && (
                <div className="mt-2 text-sm text-foreground">
                  {route.distanceMeters ? formatDistance(route.distanceMeters) : ""}
                  {route.distanceMeters && route.duration ? " · " : ""}
                  {route.duration ? formatDuration(route.duration) : ""}
                </div>
              )}
              <ol className="mt-3 max-h-64 space-y-2 overflow-y-auto pr-1">
                {route.steps.map((step, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-secondary text-[9px] font-bold text-foreground">
                      {i + 1}
                    </span>
                    <span>
                      {step.instruction}
                      {step.distanceMeters > 0 && <span className="text-foreground/60"> ({formatDistance(step.distanceMeters)})</span>}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="h-[420px] overflow-hidden rounded-2xl border border-border lg:col-span-3 lg:h-auto lg:min-h-[560px]">
          <ClientOnly fallback={<div className="grid h-full place-items-center text-sm text-muted-foreground">Loading map…</div>}>
            <Suspense fallback={<div className="grid h-full place-items-center text-sm text-muted-foreground">Loading map…</div>}>
              {stores.length > 0 ? (
                <StoreMap
                  stores={stores}
                  selectedId={selectedId}
                  encodedPolyline={route?.encodedPolyline ?? null}
                  origin={origin}
                  onSelect={(id) => {
                    setSelectedId(id);
                    setRoute(null);
                  }}
                />
              ) : (
                <div className="grid h-full place-items-center text-sm text-muted-foreground">Locating stores…</div>
              )}
            </Suspense>
          </ClientOnly>
        </div>
      </div>
    </div>
  );
}
