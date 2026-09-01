export interface Store {
  id: string;
  name: string;
  address: string;
}

export interface StoreWithCoords extends Store {
  lat: number;
  lng: number;
}

export const STORES: Store[] = [
  {
    id: "ivory-park",
    name: "Ivory Park Store",
    address: "6 Peter Street, Ivory Park 3, South Africa",
  },
  {
    id: "johannesburg",
    name: "Johannesburg Store",
    address: "56-62 Delvers Street, Johannesburg, South Africa",
  },
];

export function googleMapsDirectionsUrl(address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}
