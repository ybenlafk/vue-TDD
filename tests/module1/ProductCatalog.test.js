import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { products, categories } from "../../mock-data/products";

describe("ProductCatalog.vue", () => {
  beforeEach(() => {
    // Reset mocks between tests
    vi.resetAllMocks();
  });

  it("renders the product catalog with all components", async () => {
    // Import all the required components
    let ProductCatalog,
      ProductCard,
      ProductFilter,
      ProductSort,
      useProductStore;

    try {
      ProductCatalog = (await import("../../src/components/ProductCatalog.vue"))
        .default;
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail(
        "Required components or store not found. Make sure to create all required files."
      );
    }

    // Create a test pinia store
    const wrapper = mount(ProductCatalog, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              productStore: {
                products,
                selectedCategory: null,
                searchQuery: "",
                sortOption: "",
                filteredProducts: products,
              },
            },
          }),
        ],
        stubs: {
          ProductCard: true,
          ProductFilter: true,
          ProductSort: true,
        },
      },
    });

    // Check if filter, sort components are rendered
    expect(wrapper.findComponent({ name: "ProductFilter" }).exists()).toBe(
      true
    );
    expect(wrapper.findComponent({ name: "ProductSort" }).exists()).toBe(true);

    // Check if product cards are rendered for each product
    const productCards = wrapper.findAllComponents({ name: "ProductCard" });
    expect(productCards.length).toBe(products.length);
  });

  it('displays "No products found" when filtered products list is empty', async () => {
    let ProductCatalog, useProductStore;

    try {
      ProductCatalog = (await import("../../src/components/ProductCatalog.vue"))
        .default;
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail(
        "Required components or store not found. Make sure to create all required files."
      );
    }

    // Create a test pinia store with empty filtered products
    const wrapper = mount(ProductCatalog, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              productStore: {
                products,
                selectedCategory: null,
                searchQuery: "nonexistent product",
                sortOption: "",
                filteredProducts: [],
              },
            },
          }),
        ],
        stubs: {
          ProductCard: true,
          ProductFilter: true,
          ProductSort: true,
        },
      },
    });

    // Check if the "No products found" message is displayed
    expect(wrapper.text()).toContain("No products found");

    // Check that no product cards are rendered
    const productCards = wrapper.findAllComponents({ name: "ProductCard" });
    expect(productCards.length).toBe(0);
  });

  it("updates store when category filter changes", async () => {
    let ProductCatalog, ProductFilter, useProductStore;

    try {
      ProductCatalog = (await import("../../src/components/ProductCatalog.vue"))
        .default;
      ProductFilter = (await import("../../src/components/ProductFilter.vue"))
        .default;
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail(
        "Required components or store not found. Make sure to create all required files."
      );
    }

    // Create a test pinia store
    const wrapper = mount(ProductCatalog, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
        stubs: {
          ProductSort: true,
          ProductCard: true,
        },
      },
    });

    // Get the store instance
    const store = useProductStore();

    // Find the ProductFilter component
    const filterComponent = wrapper.findComponent(ProductFilter);

    // Emit category-change event from the filter component
    await filterComponent.vm.$emit("category-change", "electronics");

    // Check if the setCategory action was called with the correct value
    expect(store.setCategory).toHaveBeenCalledWith("electronics");
  });

  it("updates store when search query changes", async () => {
    let ProductCatalog, ProductFilter, useProductStore;

    try {
      ProductCatalog = (await import("../../src/components/ProductCatalog.vue"))
        .default;
      ProductFilter = (await import("../../src/components/ProductFilter.vue"))
        .default;
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail(
        "Required components or store not found. Make sure to create all required files."
      );
    }

    // Create a test pinia store
    const wrapper = mount(ProductCatalog, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
        stubs: {
          ProductSort: true,
          ProductCard: true,
        },
      },
    });

    // Get the store instance
    const store = useProductStore();

    // Find the ProductFilter component
    const filterComponent = wrapper.findComponent(ProductFilter);

    // Emit search-change event from the filter component
    await filterComponent.vm.$emit("search-change", "headphones");

    // Check if the setSearchQuery action was called with the correct value
    expect(store.setSearchQuery).toHaveBeenCalledWith("headphones");
  });

  it("updates store when sort option changes", async () => {
    let ProductCatalog, ProductSort, useProductStore;

    try {
      ProductCatalog = (await import("../../src/components/ProductCatalog.vue"))
        .default;
      ProductSort = (await import("../../src/components/ProductSort.vue"))
        .default;
      useProductStore = (await import("../../src/stores/productStore"))
        .useProductStore;
    } catch (e) {
      expect.fail(
        "Required components or store not found. Make sure to create all required files."
      );
    }

    // Create a test pinia store
    const wrapper = mount(ProductCatalog, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
        stubs: {
          ProductFilter: true,
          ProductCard: true,
        },
      },
    });

    // Get the store instance
    const store = useProductStore();

    // Find the ProductSort component
    const sortComponent = wrapper.findComponent(ProductSort);

    // Emit sort-change event from the sort component
    await sortComponent.vm.$emit("sort-change", "price-asc");

    // Check if the setSortOption action was called with the correct value
    expect(store.setSortOption).toHaveBeenCalledWith("price-asc");
  });
});
