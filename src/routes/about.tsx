import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import storyImage from "@/assets/husn-sage.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Our Story | Husn" },
    { name: "description", content: "Meet Husn: a thoughtful perspective on Pakistani bridal, formal and occasionwear." },
    { property: "og:title", content: "Our Story | Husn" },
    { property: "og:description", content: "Meet Husn: a thoughtful perspective on Pakistani bridal, formal and occasionwear." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <>
    <section className="mx-auto grid max-w-7xl gap-9 px-5 py-12 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-20">
      <img src={storyImage} alt="Sage embroidered suit in a sunlit courtyard" width={800} height={1008} fetchPriority="high" className="aspect-[4/5] w-full object-cover" />
      <div className="max-w-xl"><span className="font-script text-4xl text-primary" lang="ur">حسن</span><p className="mt-5 text-xs uppercase text-primary">Our story</p><h1 className="mt-3 font-display text-5xl italic sm:text-6xl">Beauty, considered.</h1><p className="mt-6 text-base leading-8 text-muted-foreground">Husn — meaning beauty — was born from a simple belief: a woman shouldn’t have to choose between elegance and ease. A wardrobe can move with her through every chapter, without asking her to be anyone but herself.</p><p className="mt-5 text-base leading-8 text-muted-foreground">Every look begins with intention: considered silhouettes, thoughtful fabric and details that reward a second glance. From wedding days to quieter celebrations, the design language stays graceful, assured and unmistakably personal.</p><p className="mt-5 text-sm leading-7 text-muted-foreground">This page is a preview of the brand story. Location, tailoring and collection details will be confirmed by Husn.</p><Button asChild className="husn-button mt-8"><Link to="/shop" search={{ category: undefined }}>Explore the lookbook <ArrowRight /></Link></Button></div>
    </section>
    <section className="bg-secondary/45 px-5 py-14 text-center md:px-8 md:py-20"><p className="text-xs uppercase text-primary">The house of Husn</p><h2 className="mx-auto mt-3 max-w-xl font-display text-4xl italic sm:text-5xl">A thoughtful point of view, in every detail.</h2><Link to="/contact" className="husn-link mt-6">Make an inquiry <ArrowRight size={15} /></Link></section>
  </>;
}