import shoeLaunch from "@/assets/shoe-launch.jpg.asset.json";
import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/new")({
  head: () => ({
    meta: [
      { title: "New Arrivals — Lekompo La Matla" },
      { name: "description", content: "The freshest drops from Man Driller. Limited stock — when it's gone, it's gone." },
      { property: "og:title", content: "New Arrivals — Lekompo La Matla" },
      { property: "og:description", content: "The freshest drops from Man Driller." },
    ],
  }),
  component: NewArrivals,
});

function NewArrivals() {
  const items = PRODUCTS.filter((p) => p.isNew);
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-10 overflow-hidden rounded-2xl border border-border">
        <img
          src={shoeLaunch.url}
          alt="Lekompo La Matla — New Shoe Launch 29 August 2026"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Just Dropped</div>
      <h1 className="font-display mt-2 text-4xl uppercase tracking-wide sm:text-5xl">New Arrivals</h1>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">Fresh from the workshop and the studio. Limited stock — when it's gone, it's gone.</p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}