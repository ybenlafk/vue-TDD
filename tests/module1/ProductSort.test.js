import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("ProductSort.vue", () => {
  it("renders all sort options correctly", async () => {
    let ProductSort;
    try {
      ProductSort = (await import("../../src/components/ProductSort.vue"))
        .default;
    } catch (e) {
      expect.fail(
        "ProductSort.vue component not found. Create this component first."
      );
    }

    const wrapper = mount(ProductSort, {
      props: {
        currentSort: "",
      },
    });

    // Check if all required sort options are displayed
    const sortOptions = [
      "Price: Low to High",
      "Price: High to Low",
      "Rating: High to Low",
    ];

    sortOptions.forEach((option) => {
      expect(wrapper.text()).toContain(option);
    });
  });

  it("emits sort-change event when sort option is selected", async () => {
    let ProductSort;
    try {
      ProductSort = (await import("../../src/components/ProductSort.vue"))
        .default;
    } catch (e) {
      expect.fail(
        "ProductSort.vue component not found. Create this component first."
      );
    }

    const wrapper = mount(ProductSort, {
      props: {
        currentSort: "",
      },
    });

    // Find all sort option elements
    const sortElements = wrapper.findAll('[data-test="sort-option"]');
    expect(sortElements.length).toBeGreaterThan(0);

    // Click the first sort option
    await sortElements[0].trigger("click");

    // Check if sort-change event was emitted
    expect(wrapper.emitted("sort-change")).toBeTruthy();

    // The exact value will depend on how you've implemented the component
    // but it should be a string with a valid sort option
    expect(typeof wrapper.emitted("sort-change")[0][0]).toBe("string");
  });

  it("highlights the currently selected sort option", async () => {
    let ProductSort;
    try {
      ProductSort = (await import("../../src/components/ProductSort.vue"))
        .default;
    } catch (e) {
      expect.fail(
        "ProductSort.vue component not found. Create this component first."
      );
    }

    // Mount with a specific sort option already selected
    const wrapper = mount(ProductSort, {
      props: {
        currentSort: "price-asc",
      },
    });

    // Find the element that should be highlighted
    const highlightedOption = wrapper.find(
      '.active, .selected, [data-selected="true"]'
    );
    expect(highlightedOption.exists()).toBe(true);

    // Assuming your implementation uses data-test attributes with values matching the sort options
    const selectedOptionValue =
      highlightedOption.attributes("data-value") ||
      highlightedOption.attributes("value") ||
      "";

    expect(selectedOptionValue).toBe("price-asc");
  });
});
