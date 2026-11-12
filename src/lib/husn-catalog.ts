import heroImage from "@/assets/husn-hero.jpg";
import formalImage from "@/assets/husn-formal.jpg";
import sageImage from "@/assets/husn-sage.jpg";
import partyImage from "@/assets/husn-party.jpg";

export type HusnCategory = "Bridal" | "Formal" | "Office Wear" | "Party Wear";

export type HusnProduct = {
  id: string;
  slug: string;
  name: string;
  category: HusnCategory;
  image: string;
  imageAlt: string;
  description: string;
  note: string;
  colorOptions: string[];
  sizes: string[];
  featured?: boolean;
};

export const husnCategories: {
  name: HusnCategory;
  slug: string;
  image: string;
  imageAlt: string;
}[] = [
  { name: "Bridal", slug: "bridal", image: heroImage, imageAlt: "Ivory embroidered formalwear in a heritage courtyard" },
  { name: "Formal", slug: "formal", image: formalImage, imageAlt: "Garnet embroidered occasion wear" },
  { name: "Office Wear", slug: "office-wear", image: sageImage, imageAlt: "Sage green embroidered suit in soft daylight" },
  { name: "Party Wear", slug: "party-wear", image: partyImage, imageAlt: "Muted rose embroidered occasionwear in an old courtyard" },
];

// Editorial sample pieces for the preview, not confirmed inventory or current prices.
export const husnProducts: HusnProduct[] = [
  {
    id: "sample-zar-e-noor",
    slug: "zar-e-noor",
    name: "Zar-e-Noor",
    category: "Bridal",
    image: heroImage,
    imageAlt: "Champagne ivory handworked ensemble with a flowing dupatta",
    description: "A considered ivory silhouette, layered with delicate handwork and finished with a sheer dupatta. Presented as an editorial sample for the Husn lookbook.",
    note: "A soft heirloom for the moments that stay with you.",
    colorOptions: ["Champagne", "Ivory"],
    sizes: ["XS", "S", "M", "L", "Custom"],
    featured: true,
  },
  {
    id: "sample-raad",
    slug: "raad",
    name: "Rāz-e-Raat",
    category: "Formal",
    image: formalImage,
    imageAlt: "Deep garnet embroidered ensemble in a carved heritage interior",
    description: "A deep garnet formal set with intricate antique-toned embroidery and a fluid drape. Presented as an editorial sample for the Husn lookbook.",
    note: "Evening color, made quietly unforgettable.",
    colorOptions: ["Garnet", "Deep berry"],
    sizes: ["XS", "S", "M", "L", "Custom"],
    featured: true,
  },
  {
    id: "sample-gul-e-sabah",
    slug: "gul-e-sabah",
    name: "Gul-e-Sabah",
    category: "Office Wear",
    image: sageImage,
    imageAlt: "Muted sage green embroidered suit with a light dupatta",
    description: "A light sage composition with considered embroidery and an easy, composed line. Presented as an editorial sample for the Husn lookbook.",
    note: "A gentler kind of polish for everyday occasions.",
    colorOptions: ["Sage", "Soft ivory"],
    sizes: ["XS", "S", "M", "L", "Custom"],
    featured: true,
  },
  {
    id: "sample-naaz",
    slug: "naaz",
    name: "Naaz-e-Gul",
    category: "Party Wear",
    image: partyImage,
    imageAlt: "Muted rose embroidered occasion ensemble in a heritage courtyard",
    description: "A luminous rose occasion look with measured handwork and a graceful finish. Presented as an editorial sample for the Husn lookbook.",
    note: "For the celebrations you carry close.",
    colorOptions: ["Muted rose", "Soft pink"],
    sizes: ["XS", "S", "M", "L", "Custom"],
    featured: true,
  },
];

export function findHusnProduct(slug: string): HusnProduct | undefined {
  return husnProducts.find((product) => product.slug === slug);
}

export function filterHusnProducts(categorySlug?: string): HusnProduct[] {
  const category = husnCategories.find((item) => item.slug === categorySlug);
  return category
    ? husnProducts.filter((product) => product.category === category.name)
    : husnProducts;
}