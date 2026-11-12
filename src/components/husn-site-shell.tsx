import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHusnCart } from "@/lib/husn-cart";

export function HusnWordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`husn-wordmark ${inverse ? "text-primary-foreground" : "text-foreground"}`}>
      <span className={`husn-script-mark ${inverse ? "text-accent" : "text-primary"}`} lang="ur" aria-label="Husn in Urdu">حسن</span>
      <span>Husn</span>
    </span>
  );
}

export function HusnSiteShell({ children }: { children: ReactNode }) {
  const { itemCount } = useHusnCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="husn-page-shell">
      <div className="bg-primary px-4 py-2 text-center text-xs text-primary-foreground">A considered lookbook of bridal, formal & everyday occasionwear</div>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-4 px-5 md:h-[82px] md:px-8">
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            <Link to="/shop" search={{ category: undefined }} className="husn-link">Collection</Link>
            <Link to="/shop" search={{ category: "bridal" }} className="husn-link">Bridal</Link>
            <Link to="/shop" search={{ category: "formal" }} className="husn-link">Formal</Link>
            <Link to="/about" className="husn-link">Our story</Link>
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon" aria-label="Open menu" title="Open menu" onClick={() => setMenuOpen(true)}><Menu /></Button>
          <Link to="/" aria-label="Husn home" className="mx-auto md:absolute md:left-1/2 md:-translate-x-1/2"><HusnWordmark /></Link>
          <Link to="/bag" aria-label={`Selection bag, ${itemCount} pieces`} className="relative inline-flex min-h-11 min-w-11 items-center justify-center text-foreground transition-colors hover:text-primary">
            <ShoppingBag size={21} strokeWidth={1.5} />
            {itemCount > 0 && <span className="absolute right-0 top-0 flex size-[18px] items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">{itemCount}</span>}
          </Link>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-50 bg-background md:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="flex h-[70px] items-center justify-between border-b border-border px-5"><HusnWordmark /><Button variant="ghost" size="icon" aria-label="Close menu" title="Close menu" onClick={() => setMenuOpen(false)}><X /></Button></div>
        <nav aria-label="Mobile navigation" className="flex flex-col gap-3 px-6 py-8">
          <Link to="/shop" search={{ category: undefined }} onClick={() => setMenuOpen(false)} className="min-h-12 border-b border-border py-2 font-display text-3xl italic">Collection</Link>
          <Link to="/shop" search={{ category: "bridal" }} onClick={() => setMenuOpen(false)} className="min-h-12 border-b border-border py-2 font-display text-3xl italic">Bridal</Link>
          <Link to="/shop" search={{ category: "formal" }} onClick={() => setMenuOpen(false)} className="min-h-12 border-b border-border py-2 font-display text-3xl italic">Formal</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="min-h-12 border-b border-border py-2 font-display text-3xl italic">Our story</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="min-h-12 border-b border-border py-2 font-display text-3xl italic">Inquiries</Link>
          <Link to="/bag" onClick={() => setMenuOpen(false)} className="min-h-12 py-2 font-display text-3xl italic">Your selection{itemCount ? ` (${itemCount})` : ""}</Link>
        </nav>
      </div>}

      <main className="flex-1">{children}</main>
      <footer className="husn-footer mt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1fr_auto] md:items-end md:px-8">
          <div>
            <HusnWordmark inverse />
            <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/70">Beauty, considered. A quiet study in handwork, thoughtful silhouettes and the many chapters of one woman’s life.</p>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/shop" search={{ category: undefined }} className="min-h-11 inline-flex items-center text-sm text-primary-foreground/80 hover:text-accent">Collection</Link>
            <Link to="/about" className="min-h-11 inline-flex items-center text-sm text-primary-foreground/80 hover:text-accent">Our story</Link>
            <Link to="/contact" className="min-h-11 inline-flex items-center text-sm text-primary-foreground/80 hover:text-accent">Inquiries</Link>
          </nav>
          <p className="border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/55 md:col-span-2">© {new Date().getFullYear()} Husn · Lookbook preview</p>
        </div>
      </footer>
    </div>
  );
}