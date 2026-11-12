import { describe, expect, it } from "vitest";
import { filterHusnProducts, findHusnProduct, husnCategories, husnProducts } from "@/lib/husn-catalog";

describe("Husn sample catalog", () => {
  it("shows all four editorial sample pieces in the full collection", () => {
    expect(filterHusnProducts()).toHaveLength(4);
  });

  it("filters the lookbook to exactly the matching occasion", () => {
    expect(filterHusnProducts("bridal").map((product) => product.category)).toEqual(["Bridal"]);
    expect(filterHusnProducts("party-wear").map((product) => product.category)).toEqual(["Party Wear"]);
  });

  it("keeps every category linked to a non-empty sample collection", () => {
    for (const category of husnCategories) {
      expect(filterHusnProducts(category.slug).length).toBeGreaterThan(0);
    }
    expect(husnProducts.every((product) => product.id.startsWith("sample-"))).toBe(true);
  });

  it("resolves the displayed sample pieces by their page slugs", () => {
    expect(findHusnProduct("zar-e-noor")?.name).toBe("Zar-e-Noor");
    expect(findHusnProduct("unknown-piece")).toBeUndefined();
  });
});