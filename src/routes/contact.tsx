import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { whatsappBookingUrl, WHATSAPP_NUMBER } from "@/lib/cart";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings — Lekompo La Matla" },
      { name: "description", content: "Book Man Driller for your event or send us an order inquiry." },
      { property: "og:title", content: "Contact & Bookings — Lekompo La Matla" },
      { property: "og:description", content: "Book Man Driller for your event." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", event: "", date: "", location: "", message: "" });
  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    window.open(whatsappBookingUrl(form), "_blank", "noopener");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-20">
      <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Contact</div>
      <h1 className="font-display mt-2 text-4xl uppercase tracking-wide sm:text-5xl">Bookings & Inquiries</h1>
      <p className="mt-3 max-w-xl text-sm text-muted-foreground">
        Want to book Man Driller for your event, or chat about an order? Drop your details below — your message will be drafted and sent straight to WhatsApp.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <form onSubmit={submit} className="space-y-4 md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" required>
              <input value={form.name} onChange={onChange("name")} required maxLength={80} className={inputCls} />
            </Field>
            <Field label="Event type">
              <input value={form.event} onChange={onChange("event")} placeholder="Club night, festival…" maxLength={80} className={inputCls} />
            </Field>
            <Field label="Date">
              <input value={form.date} onChange={onChange("date")} type="date" className={inputCls} />
            </Field>
            <Field label="Location">
              <input value={form.location} onChange={onChange("location")} maxLength={120} className={inputCls} />
            </Field>
          </div>
          <Field label="Message" required>
            <textarea value={form.message} onChange={onChange("message")} required maxLength={1000} rows={5} className={inputCls + " resize-none"} />
          </Field>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-blood)] transition hover:scale-[1.02]">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </button>
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Direct</div>
            <div className="mt-2 font-display text-xl uppercase tracking-wide">WhatsApp</div>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="mt-1 inline-flex items-center gap-2 text-primary">
              <Phone className="h-4 w-4" /> +27 67 209 3814
            </a>
            <p className="mt-3 text-xs text-muted-foreground">Fastest way to reach Man Driller. Replies usually within a few hours.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Hours</div>
            <div className="mt-2 text-sm text-muted-foreground">Mon–Sat · 09:00 – 21:00 SAST</div>
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
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}