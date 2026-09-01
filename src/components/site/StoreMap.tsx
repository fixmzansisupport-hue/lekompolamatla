import { useEffect, useRef } from "react";
import type { StoreWithCoords } from "@/lib/stores";

/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    __llmInitMap?: () => void;
    __llmMapsReady?: boolean;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadGoogleMaps(): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    if (window.__llmMapsReady) return resolve();
    const key = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
    const channel = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID;
    if (!key) return reject(new Error("Google Maps browser key is not configured"));
    window.__llmInitMap = () => {
      window.__llmMapsReady = true;
      resolve();
    };
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=__llmInitMap&channel=${channel}`;
    script.async = true;
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export interface StoreMapProps {
  stores: StoreWithCoords[];
  selectedId: string | null;
  encodedPolyline: string | null;
  origin: { lat: number; lng: number } | null;
  onSelect: (id: string) => void;
}

export default function StoreMap({ stores, selectedId, encodedPolyline, origin, onSelect }: StoreMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const polylineRef = useRef<any>(null);
  const originMarkerRef = useRef<any>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  // Initialize map
  useEffect(() => {
    let cancelled = false;
    loadGoogleMaps()
      .then(async () => {
        if (cancelled || !containerRef.current || mapRef.current) return;
        const google = (window as any).google;
        const { Map } = (await google.maps.importLibrary("maps")) as any;
        const map = new Map(containerRef.current, {
          center: { lat: -26.05, lng: 28.05 },
          zoom: 10,
          mapTypeControl: false,
          streetViewControl: false,
        });
        mapRef.current = map;

        for (const store of stores) {
          const marker = new google.maps.Marker({
            map,
            position: { lat: store.lat, lng: store.lng },
            title: store.name,
          });
          marker.addListener("click", () => onSelectRef.current(store.id));
          markersRef.current.set(store.id, marker);
        }

        if (stores.length > 0) {
          const bounds = new google.maps.LatLngBounds();
          for (const s of stores) bounds.extend({ lat: s.lat, lng: s.lng });
          map.fitBounds(bounds, 80);
        }
      })
      .catch((err) => console.error(err));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Focus selected store
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedId) return;
    const store = stores.find((s) => s.id === selectedId);
    if (!store) return;
    map.panTo({ lat: store.lat, lng: store.lng });
    if (!encodedPolyline) map.setZoom(15);
    const marker = markersRef.current.get(selectedId);
    const google = (window as any).google;
    if (marker && google) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(() => marker.setAnimation(null), 1400);
    }
  }, [selectedId, stores, encodedPolyline]);

  // Draw route polyline
  useEffect(() => {
    let cancelled = false;
    const draw = async () => {
      const map = mapRef.current;
      if (!map) return;
      const google = (window as any).google;
      if (polylineRef.current) {
        polylineRef.current.setMap(null);
        polylineRef.current = null;
      }
      if (originMarkerRef.current) {
        originMarkerRef.current.setMap(null);
        originMarkerRef.current = null;
      }
      if (!encodedPolyline) return;
      const { encoding } = (await google.maps.importLibrary("geometry")) as any;
      if (cancelled) return;
      const path = encoding.decodePath(encodedPolyline);
      const polyline = new google.maps.Polyline({
        map,
        path,
        strokeColor: "#e11d48",
        strokeOpacity: 0.9,
        strokeWeight: 5,
      });
      polylineRef.current = polyline;
      const bounds = new google.maps.LatLngBounds();
      for (const p of path) bounds.extend(p);
      map.fitBounds(bounds, 60);
      if (origin) {
        originMarkerRef.current = new google.maps.Marker({
          map,
          position: origin,
          title: "You are here",
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#2563eb",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        });
      }
    };
    if (mapRef.current) void draw();
    else {
      const t = setInterval(() => {
        if (mapRef.current) {
          clearInterval(t);
          void draw();
        }
      }, 200);
      return () => {
        cancelled = true;
        clearInterval(t);
      };
    }
    return () => {
      cancelled = true;
    };
  }, [encodedPolyline, origin]);

  return <div ref={containerRef} className="h-full w-full rounded-2xl" aria-label="Store locations map" />;
}
