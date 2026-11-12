import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { HusnProduct } from "@/lib/husn-catalog";

export function HusnProductCard({ product }: { product: HusnProduct }) {
  return (
    <article className="husn-product-card group">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
        <div className="husn-product-image relative">
          <img src={product.image} alt={product.imageAlt} width={900} height={1200} loading="lazy" />
          <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] uppercase text-muted-foreground">Preview piece</span>
          <span className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"><ArrowUpRight size={18} strokeWidth={1.5} /></span>
        </div>
        <div className="flex items-start justify-between gap-3 pt-4">
          <div>
            <p className="text-xs text-muted-foreground">{product.category}</p>
            <h3 className="mt-1 font-display text-2xl italic leading-tight">{product.name}</h3>
          </div>
          <span className="pt-5 text-xs text-muted-foreground">Price on request</span>
        </div>
      </Link>
    </article>
  );
}