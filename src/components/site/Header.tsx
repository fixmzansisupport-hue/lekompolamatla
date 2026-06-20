import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { useCart } from "@/lib/cart";

const NAV = [
  { to: "/shop", label: "Shop" },
  { to: "/new", label: "New Arrivals" },
  { to: "/about", label: "About Man Driller" },
  { to: "/contact", label: "Contact / Bookings" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo.url} alt="Lekompo La Matla" className="h-11 w-11 shrink-0 rounded-full ring-2 ring-primary/60" />
          <div className="min-w-0 leading-none">
            <div className="font-display truncate text-lg uppercase tracking-wider sm:text-xl">Lekompo La Matla</div>
            <div className="mt-0.5 truncate text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Founded by Man Driller</div>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-foreground bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <Link
            to="/cart"
            className="relative inline-flex h-10 items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 text-sm font-semibold transition hover:border-primary hover:text-primary"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="ml-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 lg:hidden"
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 font-display text-lg uppercase tracking-wider"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}