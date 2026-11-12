import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/husn-hero.jpg";
import formalImage from "@/assets/husn-formal.jpg";
import sageImage from "@/assets/husn-sage.jpg";
import partyImage from "@/assets/husn-party.jpg";
import { HusnProductCard } from "@/components/husn-product-card";
import { Button } from "@/components/ui/button";
import { husnCategories, husnProducts } from "@/lib/husn-catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Husn — Bridal, formal & occasionwear" },
      { name: "description", content: "Discover a considered lookbook of Pakistani bridal, formal and occasionwear by Husn." },
      { property: "og:title", content: "Husn — Bridal, formal & occasionwear" },
      { property: "og:description", content: "Discover a considered lookbook of Pakistani bridal, formal and occasionwear by Husn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="husn-hero flex items-center text-primary-foreground">
        <img className="husn-hero-image" src={heroImage} width={912} height={1200} alt="Ivory handworked ensemble in a Lahore heritage courtyard" fetchPriority="high" />
        <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-8 md:py-16">
          <div className="max-w-[600px]">
            <span className="mb-7 block text-xs uppercase text-accent">Bridal · Formal · Occasion</span>
            <h1 className="font-display text-5xl italic leading-[0.92] sm:text-6xl md:text-7xl">Husn<br />Beauty,<br />considered.</h1>
            <p className="mt-6 max-w-md text-base leading-7 text-primary-foreground/85">Handworked silhouettes for the many chapters of one woman’s life.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild className="husn-button h-12 px-6"><Link to="/shop" search={{ category: undefined }}>Explore the lookbook <ArrowRight /></Link></Button>
              <span className="text-sm text-primary-foreground/75">A study in craft & quiet elegance</span>
            </div>
            <div className="mt-14 flex items-center gap-3"><span className="font-script text-3xl text-accent" lang="ur">حسن</span><span className="h-px w-12 bg-primary-foreground/50" /><span className="text-xs uppercase text-primary-foreground/75">Husn · Karachi</span></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs uppercase text-primary">An occasion for every chapter</p><h2 className="mt-3 font-display text-4xl italic sm:text-5xl">The world of Husn</h2></div>
          <Link to="/shop" search={{ category: undefined }} className="husn-link">Explore all <ArrowUpRight size={15} /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {husnCategories.map((category) => {
            const image = category.name === "Bridal" ? heroImage : category.name === "Formal" ? formalImage : category.name === "Office Wear" ? sageImage : partyImage;
            return <Link key={category.slug} to="/shop" search={{ category: category.slug }} className="husn-category-tile group">
              <img src={image} alt={category.imageAlt} width={800} height={1000} loading="lazy" />
              <span className="relative z-10 flex w-full items-end justify-between p-4 text-primary-foreground sm:p-5"><span><span className="block text-[10px] uppercase">Discover</span><span className="mt-1 block font-display text-2xl italic sm:text-3xl">{category.name}</span></span><ArrowUpRight size={17} /></span>
            </Link>;
          })}
        </div>
      </section>

      <section className="bg-secondary/45 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs uppercase text-primary">A few considered pieces</p><h2 className="mt-3 font-display text-4xl italic sm:text-5xl">From the lookbook</h2></div>
            <Link to="/shop" search={{ category: undefined }} className="husn-link">View the collection <ArrowRight size={15} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">{husnProducts.map((product) => <HusnProductCard key={product.id} product={product} />)}</div>
          <p className="mt-8 text-center text-xs text-muted-foreground">Preview photography and sample names · final collection details to be confirmed</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24">
        <div className="relative max-h-[620px] overflow-hidden md:order-2"><img src={partyImage} alt="Rose-toned embroidered occasionwear in a heritage courtyard" width={800} height={1008} loading="lazy" className="aspect-[4/5] w-full object-cover" /></div>
        <div className="max-w-lg md:order-1 md:py-8">
          <span className="font-script text-4xl text-primary" lang="ur">حسن</span>
          <p className="mt-6 text-xs uppercase text-primary">Our point of view</p>
          <h2 className="mt-3 font-display text-4xl italic leading-tight sm:text-5xl">A little more intention. A little less noise.</h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">Husn — meaning beauty — began with a simple belief: a woman shouldn’t have to choose between elegance and ease. Each look is imagined for real moments, layered with thoughtful craft.</p>
          <Button asChild variant="outline" className="husn-button-outline mt-8 h-12"><Link to="/about">Read our story <ArrowRight /></Link></Button>
        </div>
      </section>

      <section className="bg-primary px-5 py-12 text-center text-primary-foreground md:py-16">
        <p className="text-xs uppercase text-accent">Have something special in mind?</p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl italic sm:text-5xl">Let’s begin with a conversation.</h2>
        <Button asChild variant="outline" className="husn-button-outline mt-7 h-12 border-primary-foreground/60 text-primary-foreground"><Link to="/contact">Make an inquiry <ArrowRight /></Link></Button>
      </section>
    </>
  );
}
