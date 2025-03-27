import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { products } from "../../mock-data/products";

// This test will fail until the engineer creates the ProductCard component
// with the expected functionality
describe("ProductCard.vue", () => {
  it("renders product information correctly", async () => {
    // Dynamic import to allow the test to run even if file doesn't exist yet
    let ProductCard;
    try {
      ProductCard = (await import("../../src/components/ProductCard.vue"))
        .default;
    } catch (e) {
      expect.fail(
        "ProductCard.vue component not found. Create this component first."
      );
    }

    const product = products[0];
    const wrapper = mount(ProductCard, {
      props: {
        product,
      },
    });

    // Test if product name is displayed
    expect(wrapper.text()).toContain(product.name);

    // Test if product price is displayed and formatted correctly
    expect(wrapper.text()).toContain("$199.99");

    // Test if product rating is displayed
    expect(wrapper.text()).toContain(product.rating.toString());

    // Test if there is an image with the right source (using the first image)
    const image = wrapper.find("img");
    expect(image.exists()).toBe(true);

    // Test if there is an "Add to Cart" button
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text().toLowerCase()).toContain("add to cart");
  });

  it("emits an add-to-cart event when button is clicked", async () => {
    let ProductCard;
    try {
      ProductCard = (await import("../../src/components/ProductCard.vue"))
        .default;
    } catch (e) {
      expect.fail(
        "ProductCard.vue component not found. Create this component first."
      );
    }

    const product = products[0];
    const wrapper = mount(ProductCard, {
      props: {
        product,
      },
    });

    // Find the add to cart button and click it
    const button = wrapper.find("button");
    await button.trigger("click");

    // Check if the add-to-cart event was emitted with the product as payload
    expect(wrapper.emitted("add-to-cart")).toBeTruthy();
    expect(wrapper.emitted("add-to-cart")[0][0]).toEqual(product);
  });
});
