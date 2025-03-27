import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { categories } from "../../mock-data/products";

describe("ProductFilter.vue", () => {
  it("renders all categories correctly", async () => {
    let ProductFilter;
    try {
      ProductFilter = (await import("../../src/components/ProductFilter.vue"))
        .default;
    } catch (e) {
      expect.fail(
        "ProductFilter.vue component not found. Create this component first."
      );
    }

    const wrapper = mount(ProductFilter, {
      props: {
        categories: categories,
        selectedCategory: null,
      },
    });

    // Check if "All Categories" option exists
    expect(wrapper.text()).toContain("All Categories");

    // Check if all categories from mock data are displayed
    categories.forEach((category) => {
      expect(wrapper.text()).toContain(category.name);
    });
  });

  it("emits category-change event when category is selected", async () => {
    let ProductFilter;
    try {
      ProductFilter = (await import("../../src/components/ProductFilter.vue"))
        .default;
    } catch (e) {
      expect.fail(
        "ProductFilter.vue component not found. Create this component first."
      );
    }

    const wrapper = mount(ProductFilter, {
      props: {
        categories: categories,
        selectedCategory: null,
      },
    });

    // Find all category options/buttons
    const categoryElements = wrapper.findAll('[data-test="category-option"]');

    // Click the first category option (after "All Categories")
    if (categoryElements.length > 1) {
      await categoryElements[1].trigger("click");

      // Check if category-change event was emitted with correct category id
      expect(wrapper.emitted("category-change")).toBeTruthy();
      expect(wrapper.emitted("category-change")[0][0]).toBe(categories[0].id);
    } else {
      expect.fail("No category options found in the component.");
    }
  });

  it("emits search-change event when search input changes", async () => {
    let ProductFilter;
    try {
      ProductFilter = (await import("../../src/components/ProductFilter.vue"))
        .default;
    } catch (e) {
      expect.fail(
        "ProductFilter.vue component not found. Create this component first."
      );
    }

    const wrapper = mount(ProductFilter, {
      props: {
        categories: categories,
        selectedCategory: null,
      },
    });

    // Find search input
    const searchInput = wrapper.find('input[type="text"]');
    expect(searchInput.exists()).toBe(true);

    // Set search value and trigger input event
    await searchInput.setValue("headphones");
    await searchInput.trigger("input");

    // Check if search-change event was emitted with correct search term
    expect(wrapper.emitted("search-change")).toBeTruthy();
    expect(wrapper.emitted("search-change")[0][0]).toBe("headphones");
  });
});
