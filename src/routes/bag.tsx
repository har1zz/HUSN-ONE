import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHusnCart } from "@/lib/husn-cart";

export const Route = createFileRoute("/bag")({
  head: () => ({ meta: [
    { title: "Your selection | Husn" },
    { name: "description", content: "Review your private Husn lookbook selection saved on this device." },
    { property: "og:title", content: "Your selection | Husn" },
    { property: "og:description", content: "Review your private Husn lookbook selection saved on this device." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BagPage,
});

function BagPage() {
  const { items, removeItem, updateQuantity } = useHusnCart();

  return <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
    <div className="text-center"><p className="text-xs uppercase text-primary">A private selection</p><h1 className="mt-3 font-display text-5xl italic sm:text-6xl">Your lookbook</h1><p className="mt-4 text-sm text-muted-foreground">Saved on this device only · no order has been placed</p></div>
    {items.length === 0 ? <div className="py-20 text-center"><p className="font-display text-3xl italic">A little room for something lovely.</p><Button asChild className="husn-button mt-7"><Link to="/shop" search={{ category: undefined }}>Explore the collection</Link></Button></div> : <>
      <ul className="mt-10 divide-y divide-border border-y border-border">{items.map((item) => <li key={`${item.productId}-${item.size}-${item.color}`} className="grid grid-cols-[92px_1fr] gap-4 py-5 sm:grid-cols-[112px_1fr_auto] sm:gap-6">
        <Link to="/product/$slug" params={{ slug: item.slug }} className="husn-product-image aspect-[3/4]"><img src={item.image} alt="" width={300} height={400} loading="lazy" /></Link>
        <div className="flex flex-col justify-center"><p className="text-xs uppercase text-muted-foreground">Preview piece</p><Link to="/product/$slug" params={{ slug: item.slug }} className="mt-1 font-display text-2xl italic">{item.name}</Link><div className="mt-2 flex flex-wrap gap-2"><span className="husn-selection-chip">{item.color}</span><span className="husn-selection-chip">Size {item.size}</span></div><div className="mt-3 flex items-center gap-2"><Button variant="outline" size="icon" aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}><Minus /></Button><span className="min-w-7 text-center tabular-nums" aria-label={`Quantity ${item.quantity}`}>{item.quantity}</span><Button variant="outline" size="icon" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.productId, item.size, item.color, Math.min(9, item.quantity + 1))}><Plus /></Button></div></div>
        <Button variant="ghost" size="icon" aria-label={`Remove ${item.name}`} title="Remove selection" className="col-start-2 row-start-1 justify-self-end self-start sm:col-start-3 sm:row-start-1" onClick={() => removeItem(item.productId, item.size, item.color)}><Trash2 /></Button>
      </li>)}</ul>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4"><p className="max-w-xl text-sm leading-6 text-muted-foreground">These sample pieces aren’t an order. Availability, prices and final details can be confirmed once your collection is ready.</p><Button asChild variant="outline" className="husn-button-outline"><Link to="/shop" search={{ category: undefined }}>Continue browsing</Link></Button></div>
    </>}
  </div>;
}