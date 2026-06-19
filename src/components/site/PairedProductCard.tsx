import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function PairedProductCard({ products }: { products: Product[] }) {
  const { add } = useCart();
  if (products.length === 0) return null;

  const [first, second] = products;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary hover:shadow-[var(--shadow-blood)] col-span-2">
      <div className="grid grid-cols-2 divide-x divide-border">
        {[first, second].filter(Boolean).map((p) => (
          <div key={p.id} className="relative">
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                {p.isNew && (
                  <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-accent-foreground">
                    New
                  </span>
                )}
              </div>
            </div>
            <div className="p-4">
              <div className="truncate font-display text-sm uppercase tracking-wide">{p.name}</div>
              <div className="mt-1 text-sm text-primary font-bold">R{p.price}</div>
              <button
                type="button"
                onClick={() => add(p.id, 1)}
                className="mt-3 w-full rounded-full bg-accent px-3 py-2 text-[11px] font-black uppercase tracking-widest text-accent-foreground transition hover:scale-105"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
