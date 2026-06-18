import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useCart, whatsappOrderUrl } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Lekompo La Matla" },
      { name: "description", content: "Confirm your order and finalise via WhatsApp with Man Driller." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { detailed, subtotal, count } = useCart();
  const [form, setForm] = useState({ name: "", location: "", note: "" });

  if (count === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center md:px-8">
        <h1 className="font-display text-4xl uppercase tracking-wide">Nothing to check out</h1>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground">Shop now</Link>
      </div>
    );
  }

  const waUrl = whatsappOrderUrl({ items: detailed, subtotal, customer: form });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waUrl, "_blank", "noopener");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Checkout</div>
      <h1 className="font-display mt-2 text-4xl uppercase tracking-wide sm:text-5xl">Confirm your order</h1>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">We finalise every order over WhatsApp with Man Driller — payment options, delivery and digital download links are all confirmed there.</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <form onSubmit={submit} className="space-y-4 lg:col-span-2">
          <Field label="Your name" required>
            <input required maxLength={80} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
          </Field>
          <Field label="Delivery location / city">
            <input maxLength={120} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputCls} placeholder="e.g. Polokwane, ZA" />
          </Field>
          <Field label="Note for Man Driller">
            <textarea maxLength={500} rows={4} value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className={inputCls + " resize-none"} placeholder="Sizes, colours, anything we should know" />
          </Field>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-blood)] transition hover:scale-[1.02]">
            <MessageCircle className="h-4 w-4" /> Send order on WhatsApp
          </button>
          <p className="text-xs text-muted-foreground">Your full cart is auto-drafted into the WhatsApp message — just hit send.</p>
        </form>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <div className="font-display text-xl uppercase tracking-wide">Order</div>
          <ul className="mt-4 space-y-3">
            {detailed.map((d) => (
              <li key={d.product.id} className="flex justify-between gap-3 text-sm">
                <span className="min-w-0 truncate text-muted-foreground">{d.product.name} × {d.qty}</span>
                <span className="shrink-0 font-bold">R{d.lineTotal}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between border-t border-border pt-4">
            <span className="font-display uppercase">Total</span>
            <span className="font-display text-2xl text-primary">R{subtotal}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}{required && <span className="text-primary"> *</span>}</span>
      {children}
    </label>
  );
}