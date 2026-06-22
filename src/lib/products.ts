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
import beanieLime from "@/assets/beanie-lime.jpg.asset.json";
import beaniePurple from "@/assets/beanie-purple.jpg.asset.json";
import beanieYellow from "@/assets/beanie-yellow.jpg.asset.json";
import ladiesTights from "@/assets/ladies-tights.png.asset.json";
import tracksuitsColors from "@/assets/tracksuits-colors.png.asset.json";
import tracksuitBlack from "@/assets/tracksuit-black.png.asset.json";
import backpacks from "@/assets/backpacks.png.asset.json";
import gloves from "@/assets/gloves.png.asset.json";
import capBlack from "@/assets/cap-black.jpg.asset.json";
import capLightblue from "@/assets/cap-lightblue.jpg.asset.json";
import capBlue from "@/assets/cap-blue.jpg.asset.json";
import capPurple from "@/assets/cap-purple.jpg.asset.json";
import capYellow from "@/assets/cap-yellow.jpg.asset.json";
import capRed from "@/assets/cap-red.jpg.asset.json";
import balaclavaBlack from "@/assets/balaclava-black.jpg.asset.json";
import balaclavaGreenCamo from "@/assets/balaclava-green-camo.jpg.asset.json";
import balaclavaPinkCamo from "@/assets/balaclava-pink-camo.jpg.asset.json";
import balaclavaBlueCamo from "@/assets/balaclava-blue-camo.jpg.asset.json";
import visorPurple from "@/assets/visor-purple.jpg.asset.json";
import visorRed from "@/assets/visor-red.jpg.asset.json";
import visorBlue from "@/assets/visor-blue.jpg.asset.json";
import visorGreen from "@/assets/visor-green.jpg.asset.json";
import visorPink from "@/assets/visor-pink.jpg.asset.json";
import trackpantsWhite from "@/assets/trackpants-white.jpg.asset.json";
import trackpantsBlue from "@/assets/trackpants-blue.jpg.asset.json";
import trackpantsPink from "@/assets/trackpants-pink.jpg.asset.json";
import trackpantsYellow from "@/assets/trackpants-yellow.jpg.asset.json";
import drifitGrey from "@/assets/drifit-grey.jpg.asset.json";
import drifitBlack from "@/assets/drifit-black.jpg.asset.json";
import drifitBlue from "@/assets/drifit-blue.jpg.asset.json";
import drifitPurple from "@/assets/drifit-purple.jpg.asset.json";
import drifitPink from "@/assets/drifit-pink.jpg.asset.json";
import drifitGreen from "@/assets/drifit-green.jpg.asset.json";

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
  { id: "tee-navy-crew", name: "Lekompo Artwork T-Shirt — Navy Crew", price: 400, category: "streetwear", description: "Premium oversized navy tee featuring the Lekompo crew artwork — a signature Lekompo La Matla piece.", image: teeNavyCrew.url },
  { id: "tee-navy-couple", name: "Lekompo Artwork T-Shirt — Navy Couple", price: 400, category: "streetwear", description: "Premium oversized navy tee with the Lekompo couple artwork. A street staple.", image: teeNavyCouple.url },
  { id: "raincoat-black", name: "Lekompo Rain Coat — Black", price: 1000, category: "streetwear", description: "Waterproof Lekompo poncho rain coat in black with reflective branding. Comes with carry pouch.", image: raincoatBlack.url },
  { id: "raincoat-white", name: "Lekompo Rain Coat — White", price: 1000, category: "streetwear", description: "Waterproof Lekompo poncho rain coat in white with reflective branding. Comes with carry pouch.", image: raincoatWhite.url },
  { id: "tee-umbrella-white", name: "Lekompo T-Shirt — Umbrella White", price: 400, category: "streetwear", description: "Lekompo La Matla oversized tee in white with the signature umbrella couple artwork.", image: teeWhiteUmbrella.url, isNew: true, featured: true, pairGroup: "umbrella-1", pairIndex: 0 },
  { id: "tee-umbrella-blue", name: "Lekompo T-Shirt — Umbrella Blue", price: 400, category: "streetwear", description: "Lekompo La Matla oversized tee in sky blue with the signature umbrella couple artwork.", image: teeBlueUmbrella.url, isNew: true, pairGroup: "umbrella-1", pairIndex: 1 },
  { id: "tee-umbrella-pink", name: "Lekompo T-Shirt — Umbrella Pink", price: 400, category: "streetwear", description: "Lekompo La Matla oversized tee in soft pink with the signature umbrella couple artwork.", image: teePinkUmbrella.url, isNew: true, pairGroup: "umbrella-2", pairIndex: 0 },
  { id: "tee-umbrella-lime", name: "Lekompo T-Shirt — Umbrella Lime", price: 400, category: "streetwear", description: "Lekompo La Matla oversized tee in neon lime with the signature umbrella couple artwork.", image: teeLimeUmbrella.url, isNew: true, pairGroup: "umbrella-2", pairIndex: 1 },
  { id: "beanie-lime", name: "Lekompo Beanie — Lime", price: 100, category: "streetwear", description: "Lekompo La Matla beanie in neon lime with the signature peace-hand artwork and embroidered logo on the cuff.", image: beanieLime.url, isNew: true, featured: true, pairGroup: "beanies", pairIndex: 0 },
  { id: "beanie-purple", name: "Lekompo Beanie — Purple", price: 100, category: "streetwear", description: "Lekompo La Matla beanie in lavender purple with the signature peace-hand artwork and embroidered logo.", image: beaniePurple.url, isNew: true, pairGroup: "beanies", pairIndex: 1 },
  { id: "beanie-yellow", name: "Lekompo Beanie — Yellow", price: 100, category: "streetwear", description: "Lekompo La Matla beanie in bright yellow with the signature peace-hand artwork and embroidered logo.", image: beanieYellow.url, isNew: true, pairGroup: "beanies", pairIndex: 2 },
  { id: "ladies-tights", name: "Lekompo Ladies Tights Set", price: 250, category: "streetwear", description: "Lekompo Lageshu ladies two-piece tights set — crop top and tights with the signature peace-hand and logo print. Available in blue, orange, black, teal and pink.", image: ladiesTights.url, isNew: true, featured: true },
  { id: "tracksuit-colors", name: "Lekompo Tracksuit — Colour Range", price: 900, category: "streetwear", description: "Premium Lekompo tracksuit — heavyweight hoodie and joggers with bold front print and leg branding. Available in navy, green and burnt orange.", image: tracksuitsColors.url, isNew: true, featured: true },
  { id: "tracksuit-black", name: "Lekompo Winter Special Tracksuit — Black", price: 900, category: "streetwear", description: "Black Lekompo La Matla full set: hoodie + joggers with cyan print. Winter special — comes with a free beanie.", image: tracksuitBlack.url, isNew: true },
  { id: "backpack-small", name: "Lekompo Backpack — Small", price: 350, category: "streetwear", description: "Lekompo Lageshu school backpack (small). Premium quality, designed for comfort and everyday style. Available in multiple colours.", image: backpacks.url, isNew: true, featured: true },
  { id: "backpack-large", name: "Lekompo Backpack — Large", price: 450, category: "streetwear", description: "Lekompo Lageshu school backpack (large). Premium quality, designed for comfort, strength and everyday style. Available in multiple colours.", image: backpacks.url, isNew: true },
  { id: "gloves", name: "Lekompo Reflector Gloves", price: 150, category: "streetwear", description: "Lekompo Lageshu reflector gloves with the signature logo print. Available in 9 colours: purple, blue, white, pink, yellow, red, beige, green and black.", image: gloves.url, isNew: true, featured: true },
  { id: "cap-black", name: "Lekompo Panel Cap — Black", price: 200, category: "streetwear", description: "Lekompo La Matla 5-panel cap in black with the signature glow logo on the front.", image: capBlack.url, isNew: true, featured: true },
  { id: "cap-lightblue", name: "Lekompo Panel Cap — Light Blue", price: 200, category: "streetwear", description: "Lekompo La Matla 5-panel cap in soft light blue with the signature glow logo on the front.", image: capLightblue.url, isNew: true },
  { id: "cap-blue", name: "Lekompo Panel Cap — Blue", price: 200, category: "streetwear", description: "Lekompo La Matla 5-panel cap in electric blue with the signature glow logo on the front.", image: capBlue.url, isNew: true },
  { id: "cap-purple", name: "Lekompo Panel Cap — Purple", price: 200, category: "streetwear", description: "Lekompo La Matla 5-panel cap in purple with the signature glow logo on the front.", image: capPurple.url, isNew: true },
  { id: "cap-yellow", name: "Lekompo Panel Cap — Yellow", price: 200, category: "streetwear", description: "Lekompo La Matla 5-panel cap in bright yellow with the signature glow logo on the front.", image: capYellow.url, isNew: true },
  { id: "cap-red", name: "Lekompo Panel Cap — Red", price: 200, category: "streetwear", description: "Lekompo La Matla 5-panel cap in red with the signature glow logo on the front.", image: capRed.url, isNew: true },
  { id: "balaclava-black", name: "Lekompo Balaclava — Black", price: 200, category: "streetwear", description: "Lekompo La Matla balaclava in solid black with the peace-hand logo and circle emblem.", image: balaclavaBlack.url, isNew: true, featured: true },
  { id: "balaclava-green-camo", name: "Lekompo Balaclava — Green Camo", price: 200, category: "streetwear", description: "Lekompo La Matla balaclava in green camo with the peace-hand logo and circle emblem.", image: balaclavaGreenCamo.url, isNew: true },
  { id: "balaclava-pink-camo", name: "Lekompo Balaclava — Pink Camo", price: 200, category: "streetwear", description: "Lekompo La Matla balaclava in pink camo with the peace-hand logo and circle emblem.", image: balaclavaPinkCamo.url, isNew: true },
  { id: "balaclava-blue-camo", name: "Lekompo Balaclava — Blue Camo", price: 200, category: "streetwear", description: "Lekompo La Matla balaclava in blue camo with the peace-hand logo and circle emblem.", image: balaclavaBlueCamo.url, isNew: true },
  { id: "visor-purple", name: "Lekompo Transparent Half Cap — Purple", price: 250, category: "streetwear", description: "Lekompo La Matla transparent half cap visor in deep purple with the signature glow logo. Adjustable strap.", image: visorPurple.url, isNew: true, featured: true },
  { id: "visor-red", name: "Lekompo Transparent Half Cap — Red", price: 250, category: "streetwear", description: "Lekompo La Matla transparent half cap visor in red with the signature glow logo. Adjustable strap.", image: visorRed.url, isNew: true },
  { id: "visor-blue", name: "Lekompo Transparent Half Cap — Blue", price: 250, category: "streetwear", description: "Lekompo La Matla transparent half cap visor in electric blue with the signature glow logo. Adjustable strap.", image: visorBlue.url, isNew: true },
  { id: "visor-green", name: "Lekompo Transparent Half Cap — Green", price: 250, category: "streetwear", description: "Lekompo La Matla transparent half cap visor in neon green with the signature glow logo. Adjustable strap.", image: visorGreen.url, isNew: true },
  { id: "visor-pink", name: "Lekompo Transparent Half Cap — Pink", price: 250, category: "streetwear", description: "Lekompo La Matla transparent half cap visor in pink with the signature glow logo. Adjustable strap.", image: visorPink.url, isNew: true },
  { id: "trackpants-white", name: "Lekompo Track Pants — White", price: 450, category: "streetwear", description: "Lekompo La Matla track pants in white with the signature glow logo and peace-hand artwork on the leg.", image: trackpantsWhite.url, isNew: true, featured: true },
  { id: "trackpants-blue", name: "Lekompo Track Pants — Blue", price: 450, category: "streetwear", description: "Lekompo La Matla track pants in sky blue with the signature glow logo and peace-hand artwork on the leg.", image: trackpantsBlue.url, isNew: true },
  { id: "trackpants-pink", name: "Lekompo Track Pants — Pink", price: 450, category: "streetwear", description: "Lekompo La Matla track pants in pink with the signature glow logo and peace-hand artwork on the leg.", image: trackpantsPink.url, isNew: true },
  { id: "trackpants-yellow", name: "Lekompo Track Pants — Yellow", price: 450, category: "streetwear", description: "Lekompo La Matla track pants in yellow with the signature glow logo and peace-hand artwork on the leg.", image: trackpantsYellow.url, isNew: true },
  { id: "drifit-grey", name: "Lekompo T-Shirt — Dri-Fit Grey", price: 350, category: "streetwear", description: "Lekompo La Matla Dri-Fit t-shirt in grey with the reflective LEKOMPO chest print and circle emblem.", image: drifitGrey.url, isNew: true, featured: true },
  { id: "drifit-black", name: "Lekompo T-Shirt — Dri-Fit Black", price: 350, category: "streetwear", description: "Lekompo La Matla Dri-Fit t-shirt in black with the reflective LEKOMPO chest print and circle emblem.", image: drifitBlack.url, isNew: true },
  { id: "drifit-blue", name: "Lekompo T-Shirt — Dri-Fit Blue", price: 350, category: "streetwear", description: "Lekompo La Matla Dri-Fit t-shirt in sky blue with the reflective LEKOMPO chest print and circle emblem.", image: drifitBlue.url, isNew: true },
  { id: "drifit-purple", name: "Lekompo T-Shirt — Dri-Fit Purple", price: 350, category: "streetwear", description: "Lekompo La Matla Dri-Fit t-shirt in purple with the reflective LEKOMPO chest print and circle emblem.", image: drifitPurple.url, isNew: true },
  { id: "drifit-pink", name: "Lekompo T-Shirt — Dri-Fit Pink", price: 350, category: "streetwear", description: "Lekompo La Matla Dri-Fit t-shirt in pink with the reflective LEKOMPO chest print and circle emblem.", image: drifitPink.url, isNew: true },
  { id: "drifit-green", name: "Lekompo T-Shirt — Dri-Fit Green", price: 350, category: "streetwear", description: "Lekompo La Matla Dri-Fit t-shirt in neon green with the reflective LEKOMPO chest print and circle emblem.", image: drifitGreen.url, isNew: true },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);