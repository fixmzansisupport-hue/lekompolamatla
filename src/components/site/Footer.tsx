import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-10 w-10 rounded-full ring-2 ring-primary/60" />
            <div className="font-display text-xl uppercase tracking-wider">Lekompo La Matla</div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            The official streetwear store founded by <span className="font-semibold text-foreground">Man Driller</span>. Power, culture, matla — straight from the township to the streets.
          </p>
        </div>
        <div>
          <div className="font-display text-sm uppercase tracking-widest text-accent">Shop</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">All Products</Link></li>
            <li><Link to="/new" className="hover:text-foreground">New Arrivals</Link></li>
            <li><Link to="/cart" className="hover:text-foreground">Cart</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm uppercase tracking-widest text-accent">Connect</div>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Man Driller</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Bookings</Link></li>
            <li><a href="https://wa.me/27672093814" className="hover:text-foreground">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} Lekompo La Matla. All rights reserved. Matla! 💪
      </div>
    </footer>
  );
}