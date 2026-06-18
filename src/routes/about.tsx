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
              <span className="text-foreground">Lekompo La Matla</span> is the dream of one young man from the township — <span className="text-foreground">Man Driller</span>. Growing up surrounded by the noise, the dancers and the log drums of the Lekompo movement, he saw a culture exploding from the streets that nobody was dressing properly. So he picked up the work himself.
            </p>
            <p>
              He started small. Hand-printing the first run of tees from home, packing each order himself, taking taxis across Joburg to deliver hoodies one by one. No investors, no shortcuts — just long nights, a sketchpad, and the belief that the culture deserved a flag of its own.
            </p>
            <p>
              Today, Lekompo La Matla is a movement. From the white and cyan signature hoodies, to the reflective Lageshu two-piece sets that glow on the dancefloor, to the artwork tees that tell our story in every stitch — every single piece is curated, approved and worn by Man Driller himself.
            </p>
            <p>
              This brand is for the dancers, the DJs, the hustlers and the dreamers. <em>Matla</em> means power. And power is what we wear. 💪
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