import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Flame, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import driller from "@/assets/driller.jpg.asset.json";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lekompo La Matla — Streetwear & Beats by Man Driller" },
      { name: "description", content: "Featured drops, signature streetwear and Lekompo sound packs. Curated by Man Driller." },
      { property: "og:title", content: "Lekompo La Matla" },
      { property: "og:description", content: "Streetwear, beats & matla — curated by Man Driller." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = PRODUCTS.filter((p) => p.featured);
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:gap-6 md:px-8 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
              <Flame className="h-3.5 w-3.5" /> New Drop Live
            </div>
            <h1 className="font-display mt-5 text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Power. Culture.
              <br />
              <span className="text-primary">Matla.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              Lekompo La Matla is the official streetwear & sound store curated by{" "}
              <span className="font-semibold text-foreground">Man Driller</span>. Built for the dancers, the DJs, the streets.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-blood)] transition hover:scale-[1.02]"
              >
                Shop the Drop <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 font-display text-sm uppercase tracking-widest"
              >
                Meet Man Driller
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
              <img src={driller.url} alt="Man Driller" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-display text-2xl uppercase tracking-wide">Man Driller</div>
                <div className="text-xs uppercase tracking-[0.3em] text-accent">Founder · Curator · DJ</div>
              </div>
              <img src={logo.url} alt="" className="absolute right-4 top-4 h-14 w-14 rounded-full ring-2 ring-accent/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drops */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Featured</div>
            <h2 className="font-display mt-2 text-3xl uppercase tracking-wide sm:text-4xl">Featured Drops</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-semibold text-muted-foreground hover:text-foreground sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Trending Beats */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Sound</div>
          <h2 className="font-display mt-2 text-3xl uppercase tracking-wide sm:text-4xl">Trending Beats</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">Previews of Man Driller's latest Lekompo cuts. Full packs available in the digital shop.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: "Matla Riddim", length: "3:42", tag: "Lekompo" },
              { title: "Township Drill", length: "2:58", tag: "Beat Pack" },
              { title: "Log Drum Anthem", length: "4:11", tag: "Single" },
            ].map((t) => (
              <div key={t.title} className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition hover:border-primary">
                <button className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-105">
                  <Play className="h-6 w-6 fill-current" />
                </button>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-display text-lg uppercase tracking-wide">{t.title}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.tag} · {t.length}</div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-1/3 bg-gradient-to-r from-primary to-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <Link to="/shop" className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/30 to-background p-8 md:p-12">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Apparel</div>
            <div className="font-display mt-2 text-4xl uppercase tracking-wide md:text-5xl">Streetwear</div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">Tees, hoodies, hats and cargos. Built for the dancefloor.</p>
            <div className="mt-6 inline-flex items-center gap-2 font-semibold">Shop apparel <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
          </Link>
          <Link to="/shop" className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/30 to-background p-8 md:p-12">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Sound</div>
            <div className="font-display mt-2 text-4xl uppercase tracking-wide md:text-5xl">Digital Goods</div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">Drum packs, presets, vocal chops & loop kits.</p>
            <div className="mt-6 inline-flex items-center gap-2 font-semibold">Shop sound <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
          </Link>
        </div>
      </section>
    </div>
  );
}
