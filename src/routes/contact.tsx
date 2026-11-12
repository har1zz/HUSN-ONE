import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { HusnWordmark } from "@/components/husn-site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Inquiries | Husn" },
    { name: "description", content: "Contact Husn about a design, sizing or a special occasion." },
    { property: "og:title", content: "Inquiries | Husn" },
    { property: "og:description", content: "Contact Husn about a design, sizing or a special occasion." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});

function ContactPage() {
  return <section className="mx-auto max-w-2xl px-5 py-20 text-center md:px-8 md:py-28">
    <HusnWordmark />
    <p className="mt-9 text-xs uppercase text-primary">A note to the atelier</p>
    <h1 className="mt-3 font-display text-5xl italic sm:text-6xl">Let’s begin with a conversation.</h1>
    <p className="mx-auto mt-6 max-w-md text-base leading-7 text-muted-foreground">For design, sizing and occasion inquiries, please add Husn’s verified contact details before sharing this site with customers.</p>
    <div className="mx-auto mt-8 flex max-w-md items-start gap-3 border-y border-border py-5 text-left"><MessageCircle size={20} className="mt-0.5 shrink-0 text-primary" /><p className="text-sm leading-6 text-muted-foreground">No inquiry form or messaging number is connected in this preview.</p></div>
    <Link to="/shop" search={{ category: undefined }} className="husn-link mt-8"><ArrowLeft size={15} /> Return to the lookbook</Link>
  </section>;
}