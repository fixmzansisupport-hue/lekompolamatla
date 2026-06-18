import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Lekompo La Matla" },
      { name: "description", content: "Streetwear and digital sound packs curated by Man Driller." },
      { property: "og:title", content: "Shop — Lekompo La Matla" },
      { property: "og:description", content: "Streetwear and digital sound packs curated by Man Driller." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [cat, setCat] = useState<"all" | "hoodies" | "reflective" | "tees" | "raincoats">("all");
  const groups: Record<typeof cat, (id: string) => boolean> = {
    all: () => true,
    hoodies: (id) => id.startsWith("hoodie-"),
    reflective: (id) => id.startsWith("reflective-"),
    tees: (id) => id.startsWith("tee-"),
    raincoats: (id) => id.startsWith("raincoat-"),
  };
  const items = PRODUCTS.filter((p) => groups[cat](p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Shop</div>
      <h1 className="font-display mt-2 text-4xl uppercase tracking-wide sm:text-5xl">All Products</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {([
          ["all", "All"],
          ["hoodies", "Hoodies"],
          ["reflective", "Reflective"],
          ["tees", "T-Shirts"],
          ["raincoats", "Rain Coats"],
        ] as const).map(([k, label]) => (
          <button
            key={k}
            onClick={() => setCat(k)}
            className={`rounded-full border px-4 py-2 font-display text-xs uppercase tracking-widest transition ${
              cat === k
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}