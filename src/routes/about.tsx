import { createFileRoute, Link } from "@tanstack/react-router";
import driller from "@/assets/driller.jpg.asset.json";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Man Driller — Lekompo La Matla" },
      { name: "description", content: "Man Driller is the curator and founder of Lekompo La Matla. DJ, tastemaker, and ambassador for Lekompo culture." },
      { property: "og:title", content: "About Man Driller" },
      { property: "og:description", content: "Curator and founder of Lekompo La Matla." },
      { property: "og:image", content: driller.url },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-20">
      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <div className="md:col-span-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-border">
            <img src={driller.url} alt="Man Driller" className="aspect-[4/5] w-full object-cover" />
            <img src={logo.url} alt="" className="absolute right-4 top-4 h-14 w-14 rounded-full ring-2 ring-accent/60" />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">About</div>
          <h1 className="font-display mt-2 text-4xl uppercase tracking-wide sm:text-5xl md:text-6xl">Man Driller</h1>
          <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Founder · Curator · DJ</div>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground">Man Driller</span> is the founder and curator behind <span className="text-foreground">Lekompo La Matla</span> — a streetwear and sound brand born out of the heat and rhythm of the Lekompo movement.
            </p>
            <p>
              Every tee, every hoodie, every drum pack on this store is hand-picked or produced by Driller himself. No filler. No shortcuts. Just power — <em>matla</em> — straight from the township to your speakers and your wardrobe.
            </p>
            <p>
              Whether you're a dancer chasing the next viral move, a DJ stocking up on log drums, or just somebody who wants to wear the culture loud — this is your spot.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["100+", "Shows played"],
              ["50+", "Tracks released"],
              ["1", "Movement"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-4">
                <div className="font-display text-3xl text-primary">{num}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-blood)]">
              Book Man Driller
            </Link>
            <Link to="/shop" className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-6 py-3 font-display text-sm uppercase tracking-widest">
              Shop the Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}