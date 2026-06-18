import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart, whatsappOrderUrl } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — Lekompo La Matla" },
      { name: "description", content: "Review your cart and check out via WhatsApp." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { detailed, subtotal, setQty, remove, count } = useCart();

  if (count === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-8">
        <h1 className="font-display text-4xl uppercase tracking-wide sm:text-5xl">Your cart is empty</h1>
        <p className="mt-3 text-muted-foreground">Time to grab something with some matla.</p>
        <Link to="/shop" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-blood)]">
          Shop now
        </Link>
      </div>
    );
  }

  const waUrl = whatsappOrderUrl({ items: detailed, subtotal });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <h1 className="font-display text-4xl uppercase tracking-wide sm:text-5xl">Your Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <ul className="space-y-3 lg:col-span-2">
          {detailed.map(({ product, qty, lineTotal }) => (
            <li key={product.id} className="flex gap-4 rounded-2xl border border-border bg-card p-3 sm:p-4">
              <img src={product.image} alt={product.name} className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28" />
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="truncate font-display text-base uppercase tracking-wide">{product.name}</div>
                    <div className="mt-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">Streetwear</div>
                  </div>
                  <button onClick={() => remove(product.id)} className="text-muted-foreground hover:text-primary" aria-label="Remove">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-3">
                  <div className="inline-flex items-center rounded-full border border-border">
                    <button onClick={() => setQty(product.id, qty - 1)} className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-foreground"><Minus className="h-4 w-4" /></button>
                    <span className="w-8 text-center text-sm font-bold">{qty}</span>
                    <button onClick={() => setQty(product.id, qty + 1)} className="grid h-9 w-9 place-items-center text-muted-foreground hover:text-foreground"><Plus className="h-4 w-4" /></button>
                  </div>
                  <div className="font-display text-lg text-primary">R{lineTotal}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <div className="font-display text-xl uppercase tracking-wide">Order Summary</div>
          <div className="mt-4 flex justify-between text-sm text-muted-foreground">
            <span>Subtotal</span><span className="text-foreground">R{subtotal}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm text-muted-foreground">
            <span>Shipping</span><span>Confirm via WhatsApp</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-4">
            <span className="font-display text-lg uppercase">Total</span>
            <span className="font-display text-2xl text-primary">R{subtotal}</span>
          </div>
          <Link
            to="/checkout"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-blood)]"
          >
            Checkout
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent bg-accent/10 px-6 py-3 font-display text-sm uppercase tracking-widest text-accent"
          >
            <MessageCircle className="h-4 w-4" /> Quick order on WhatsApp
          </a>
        </aside>
      </div>
    </div>
  );
}