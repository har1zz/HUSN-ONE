import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HusnProductCard } from "@/components/husn-product-card";
import { Button } from "@/components/ui/button";
import { filterHusnProducts, husnCategories } from "@/lib/husn-catalog";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search["category"] === "string" ? search["category"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "The Collection | Husn" },
      { name: "description", content: "Explore the Husn lookbook of bridal, formal, party and everyday occasionwear." },
      { property: "og:title", content: "The Collection | Husn" },
      { property: "og:description", content: "Explore the Husn lookbook of bridal, formal, party and everyday occasionwear." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { category } = Route.useSearch();
  const products = filterHusnProducts(category);
  const activeCategory = husnCategories.find((item) => item.slug === category);

  return <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <div className="text-center"><p className="text-xs uppercase text-primary">A considered lookbook</p><h1 className="mt-3 font-display text-5xl italic sm:text-6xl">{activeCategory?.name ?? "The collection"}</h1><p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted-foreground">A preview selection celebrating handwork, quiet color and considered silhouettes.</p></div>
    <nav aria-label="Filter by occasion" className="mt-8 flex flex-wrap justify-center gap-2">
      <Button asChild variant="outline" size="sm" className={`rounded-full ${!category ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : ""}`}><Link to="/shop" search={{ category: undefined }}>All</Link></Button>
      {husnCategories.map((item) => <Button key={item.slug} asChild variant="outline" size="sm" className={`rounded-full ${category === item.slug ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : ""}`}><Link to="/shop" search={{ category: item.slug }}>{item.name}</Link></Button>)}
    </nav>
    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">{products.map((product) => <HusnProductCard key={product.id} product={product} />)}</div>
    <p className="mt-10 text-center text-xs text-muted-foreground">Sample pieces and editorial photography · no live inventory or prices shown</p>
    <div className="mt-12 text-center"><Button asChild variant="link"><Link to="/contact">Ask about a piece <ArrowRight /></Link></Button></div>
  </div>;
}