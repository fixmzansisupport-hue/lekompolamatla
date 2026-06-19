import hoodieWhite from "@/assets/hoodie-white.png.asset.json";
import hoodieCyan from "@/assets/hoodie-cyan.png.asset.json";
import reflRainbow from "@/assets/reflective-rainbow.png.asset.json";
import reflSilver from "@/assets/reflective-silver.png.asset.json";
import teeWhiteCouple from "@/assets/tee-white-couple.png.asset.json";
import teeNavyCrew from "@/assets/tee-navy-crew.png.asset.json";
import teeNavyCouple from "@/assets/tee-navy-couple.png.asset.json";
import raincoatBlack from "@/assets/raincoat-black.png.asset.json";
import raincoatWhite from "@/assets/raincoat-white.png.asset.json";
import teeWhiteUmbrella from "@/assets/tee-white-umbrella.jpg.asset.json";
import teePinkUmbrella from "@/assets/tee-pink-umbrella.jpg.asset.json";
import teeLimeUmbrella from "@/assets/tee-lime-umbrella.jpg.asset.json";
import teeBlueUmbrella from "@/assets/tee-blue-umbrella.jpg.asset.json";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "streetwear";
  description: string;
  image: string;
  isNew?: boolean;
  featured?: boolean;
  pairGroup?: string;
  pairIndex?: number;
};



export const PRODUCTS: Product[] = [
  { id: "hoodie-white", name: "Lekompo Hoodie — White", price: 500, category: "streetwear", description: "Signature Lekompo La Matla hoodie. Heavyweight fleece, bold front print. Wear the culture.", image: hoodieWhite.url, featured: true, isNew: true },
  { id: "hoodie-cyan", name: "Lekompo Hoodie — Cyan", price: 500, category: "streetwear", description: "Signature Lekompo La Matla hoodie in electric cyan. Heavyweight fleece, bold front print.", image: hoodieCyan.url, featured: true },
  { id: "reflective-rainbow", name: "Lekompo Reflective 2 Piece — Rainbow", price: 1500, category: "streetwear", description: "Lageshu reflective jacket and pants set. Glow in the dark. Limited stock.", image: reflRainbow.url, featured: true, isNew: true },
  { id: "reflective-silver", name: "Lekompo Reflective 2 Piece — Silver", price: 1500, category: "streetwear", description: "Lageshu reflective jacket and shorts set. Holographic finish, glow in the dark. Limited stock.", image: reflSilver.url, isNew: true },
  { id: "tee-white-couple", name: "Lekompo Artwork T-Shirt — White Couple", price: 400, category: "streetwear", description: "Premium oversized tee with the Lekompo couple artwork print. Soft heavyweight cotton.", image: teeWhiteCouple.url, featured: true },
  { id: "tee-navy-crew", name: "Lekompo Artwork T-Shirt — Navy Crew", price: 400, category: "streetwear", description: "Premium oversized navy tee featuring the Lekompo crew artwork — a Man Driller signature.", image: teeNavyCrew.url },
  { id: "tee-navy-couple", name: "Lekompo Artwork T-Shirt — Navy Couple", price: 400, category: "streetwear", description: "Premium oversized navy tee with the Lekompo couple artwork. A street staple.", image: teeNavyCouple.url },
  { id: "raincoat-black", name: "Lekompo Rain Coat — Black", price: 1000, category: "streetwear", description: "Waterproof Lekompo poncho rain coat in black with reflective branding. Comes with carry pouch.", image: raincoatBlack.url },
  { id: "raincoat-white", name: "Lekompo Rain Coat — White", price: 1000, category: "streetwear", description: "Waterproof Lekompo poncho rain coat in white with reflective branding. Comes with carry pouch.", image: raincoatWhite.url },
  { id: "tee-umbrella-white", name: "Lekompo T-Shirt — Umbrella White", price: 400, category: "streetwear", description: "Lekompo La Matla oversized tee in white with the signature umbrella couple artwork. Man Driller edition.", image: teeWhiteUmbrella.url, isNew: true, featured: true, pairGroup: "umbrella-1", pairIndex: 0 },
  { id: "tee-umbrella-blue", name: "Lekompo T-Shirt — Umbrella Blue", price: 400, category: "streetwear", description: "Lekompo La Matla oversized tee in sky blue with the signature umbrella couple artwork.", image: teeBlueUmbrella.url, isNew: true, pairGroup: "umbrella-1", pairIndex: 1 },
  { id: "tee-umbrella-pink", name: "Lekompo T-Shirt — Umbrella Pink", price: 400, category: "streetwear", description: "Lekompo La Matla oversized tee in soft pink with the signature umbrella couple artwork.", image: teePinkUmbrella.url, isNew: true, pairGroup: "umbrella-2", pairIndex: 0 },
  { id: "tee-umbrella-lime", name: "Lekompo T-Shirt — Umbrella Lime", price: 400, category: "streetwear", description: "Lekompo La Matla oversized tee in neon lime with the signature umbrella couple artwork.", image: teeLimeUmbrella.url, isNew: true, pairGroup: "umbrella-2", pairIndex: 1 },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);