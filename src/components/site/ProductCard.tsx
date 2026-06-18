import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary hover:shadow-[var(--shadow-blood)]">
      <Link to="/shop" className="block">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-accent-foreground">New</span>
            )}
            <span className="rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur">
              Streetwear
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <div className="truncate font-display text-base uppercase tracking-wide">{product.name}</div>
          <div className="mt-1 text-sm text-primary font-bold">R{product.price}</div>
        </div>
        <button
          type="button"
          onClick={() => add(product.id, 1)}
          className="shrink-0 rounded-full bg-accent px-3 py-2 text-[11px] font-black uppercase tracking-widest text-accent-foreground transition hover:scale-105"
        >
          Add
        </button>
      </div>
    </div>
  );
}