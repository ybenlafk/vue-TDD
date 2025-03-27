import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { products, categories } from "../../mock-data/products";

describe("Product Store", () => {
  beforeEach(() => {
    // Create a fresh pinia instance for each test
    setActivePinia(createPinia());
  });

  it("initializes with correct state", async () => {
    let useProductStore;
    try {
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail("Product store not found. Create the store first.");
    }

    const productStore = useProductStore();

    // Check initial state
    expect(productStore.products.length).toBe(products.length);
    expect(productStore.selectedCategory).toBe(null);
    expect(productStore.searchQuery).toBe("");
    expect(productStore.sortOption).toBe("");
  });

  it("filters products by category", async () => {
    let useProductStore;
    try {
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail("Product store not found. Create the store first.");
    }

    const productStore = useProductStore();

    // Set category filter to "electronics"
    productStore.setCategory("electronics");

    // Check filtered products
    const electronicsProducts = products.filter(
      (p) => p.category === "electronics"
    );
    expect(productStore.filteredProducts.length).toBe(
      electronicsProducts.length
    );
    productStore.filteredProducts.forEach((product) => {
      expect(product.category).toBe("electronics");
    });

    // Reset category filter
    productStore.setCategory(null);
    expect(productStore.filteredProducts.length).toBe(products.length);
  });

  it("filters products by search query", async () => {
    let useProductStore;
    try {
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail("Product store not found. Create the store first.");
    }

    const productStore = useProductStore();

    // Set search query to "headphones"
    productStore.setSearchQuery("headphones");

    // Check filtered products
    expect(productStore.filteredProducts.length).toBeGreaterThan(0);
    expect(productStore.filteredProducts.length).toBeLessThan(products.length);
    productStore.filteredProducts.forEach((product) => {
      expect(product.name.toLowerCase()).toContain("headphones");
    });

    // Reset search query
    productStore.setSearchQuery("");
    expect(productStore.filteredProducts.length).toBe(products.length);
  });

  it("sorts products by price (low to high)", async () => {
    let useProductStore;
    try {
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail("Product store not found. Create the store first.");
    }

    const productStore = useProductStore();

    // Set sort option to price ascending
    productStore.setSortOption("price-asc");

    // Check if products are sorted by price (low to high)
    for (let i = 0; i < productStore.filteredProducts.length - 1; i++) {
      expect(productStore.filteredProducts[i].price).toBeLessThanOrEqual(
        productStore.filteredProducts[i + 1].price
      );
    }
  });

  it("sorts products by price (high to low)", async () => {
    let useProductStore;
    try {
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail("Product store not found. Create the store first.");
    }

    const productStore = useProductStore();

    // Set sort option to price descending
    productStore.setSortOption("price-desc");

    // Check if products are sorted by price (high to low)
    for (let i = 0; i < productStore.filteredProducts.length - 1; i++) {
      expect(productStore.filteredProducts[i].price).toBeGreaterThanOrEqual(
        productStore.filteredProducts[i + 1].price
      );
    }
  });

  it("sorts products by rating (high to low)", async () => {
    let useProductStore;
    try {
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail("Product store not found. Create the store first.");
    }

    const productStore = useProductStore();

    // Set sort option to rating descending
    productStore.setSortOption("rating-desc");

    // Check if products are sorted by rating (high to low)
    for (let i = 0; i < productStore.filteredProducts.length - 1; i++) {
      expect(productStore.filteredProducts[i].rating).toBeGreaterThanOrEqual(
        productStore.filteredProducts[i + 1].rating
      );
    }
  });

  it("combines filtering and sorting correctly", async () => {
    let useProductStore;
    try {
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail("Product store not found. Create the store first.");
    }

    const productStore = useProductStore();

    // Set category filter to "electronics"
    productStore.setCategory("electronics");

    // Set sort option to price ascending
    productStore.setSortOption("price-asc");

    // Check filtered and sorted products
    const electronicsProducts = products.filter(
      (p) => p.category === "electronics"
    );
    expect(productStore.filteredProducts.length).toBe(
      electronicsProducts.length
    );

    for (let i = 0; i < productStore.filteredProducts.length - 1; i++) {
      // Check that all products are in the "electronics" category
      expect(productStore.filteredProducts[i].category).toBe("electronics");

      // Check that products are sorted by price (low to high)
      expect(productStore.filteredProducts[i].price).toBeLessThanOrEqual(
        productStore.filteredProducts[i + 1].price
      );
    }
  });
});
