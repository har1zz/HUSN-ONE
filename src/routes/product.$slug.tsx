import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HusnProductCard } from "@/components/husn-product-card";
import { findHusnProduct, husnProducts, type HusnProduct } from "@/lib/husn-catalog";
import { useHusnCart } from "@/lib/husn-cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = findHusnProduct(params.slug);
    if (!product) {
      throw notFound({ routeId: "/product/$slug" });
    }
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} | Husn` : "Lookbook piece | Husn" },
      { name: "description", content: loaderData?.description ?? "Explore an editorial lookbook piece from Husn." },
      { property: "og:title", content: loaderData ? `${loaderData.name} | Husn` : "Lookbook piece | Husn" },
      { property: "og:description", content: loaderData?.description ?? "Explore an editorial lookbook piece from Husn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => <div className="mx-auto max-w-2xl px-5 py-24 text-center"><h1 className="font-display text-4xl italic">This piece isn’t in the lookbook.</h1><Button asChild className="husn-button mt-8"><Link to="/shop" search={{ category: undefined }}>Return to the collection</Link></Button></div>,
});

function ProductPage() {
  const product = Route.useLoaderData();
  if (!product) return <div className="mx-auto max-w-2xl px-5 py-24 text-center"><h1 className="font-display text-4xl italic">This piece isn’t in the lookbook.</h1><Button asChild className="husn-button mt-8"><Link to="/shop" search={{ category: undefined }}>Return to the collection</Link></Button></div>;
  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: HusnProduct }) {
  const { addItem } = useHusnCart();
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0] ?? "Custom");
  const [color, setColor] = useState(product.colorOptions[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function addToBag() {
    addItem({ productId: product.id, slug: product.slug, name: product.name, image: product.image, size, color, quantity });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  }

  const related = husnProducts.filter((item) => item.id !== product.id).slice(0, 3);

  return <>
    <div className="mx-auto max-w-7xl px-5 py-5 md:px-8"><Link to="/shop" search={{ category: undefined }} className="husn-link"><ArrowLeft size={15} /> The collection</Link></div>
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 md:grid-cols-2 md:gap-14 md:px-8 md:pb-24">
      <div className="husn-product-image aspect-[4/5]"><img src={product.image} alt={product.imageAlt} width={912} height={1200} fetchPriority="high" /></div>
      <div className="flex flex-col justify-center py-2 md:py-12">
        <p className="text-xs uppercase text-primary">{product.category} · Preview piece</p>
        <h1 className="mt-3 font-display text-5xl italic leading-none sm:text-6xl">{product.name}</h1>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">{product.description}</p>
        <p className="mt-5 border-l border-primary pl-4 font-display text-2xl italic">{product.note}</p>
        <div className="mt-8"><div className="flex items-center justify-between"><h2 className="text-xs uppercase">Color</h2><span className="text-xs text-muted-foreground">{color}</span></div><div className="mt-3 flex flex-wrap gap-2">{product.colorOptions.map((option) => <Button key={option} type="button" variant="outline" size="sm" className={`rounded-full ${color === option ? "border-primary bg-secondary" : ""}`} aria-pressed={color === option} onClick={() => setColor(option)}>{option}</Button>)}</div></div>
        <div className="mt-7"><div className="flex items-center justify-between"><h2 className="text-xs uppercase">Size</h2><Link to="/contact" className="husn-link min-h-9 normal-case"><Ruler size={15} /> Size inquiry</Link></div><div className="mt-3 flex flex-wrap gap-2">{product.sizes.map((option) => <Button key={option} type="button" variant="outline" size="sm" className={`min-w-11 ${size === option ? "border-primary bg-secondary" : ""}`} aria-pressed={size === option} onClick={() => setSize(option)}>{option}</Button>)}</div></div>
        <div className="mt-7 flex items-center gap-3"><span className="mr-1 text-xs uppercase">Quantity</span><Button variant="outline" size="icon" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus /></Button><span aria-live="polite" className="min-w-7 text-center tabular-nums">{quantity}</span><Button variant="outline" size="icon" aria-label="Increase quantity" onClick={() => setQuantity((current) => Math.min(9, current + 1))}><Plus /></Button><span className="ml-auto text-sm text-muted-foreground">Price on request</span></div>
        <Button type="button" className="husn-button mt-7 h-12 w-full" onClick={addToBag}>{added ? <><Check /> Added to your selection</> : "Add to your selection"}</Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">A private preview selection saved on this device only.</p>
      </div>
    </section>
    <section className="bg-secondary/45 px-5 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-7xl"><p className="text-xs uppercase text-primary">More from the lookbook</p><h2 className="mt-3 font-display text-4xl italic">Considered together</h2><div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">{related.map((item) => <HusnProductCard key={item.id} product={item} />)}</div></div></section>
  </>;
}