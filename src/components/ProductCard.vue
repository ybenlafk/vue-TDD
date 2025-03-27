<script scoped>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ["add-to-cart"],
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product);
    },
  },
});
</script>

<template>
  <div class="product-card">
    <h2 class="product-title">{{ product.name }}</h2>
    <p class="product-price">${{ product.price }}</p>
    <p class="product-quantity">{{ product.rating }}</p>
    <img :src="product.images[0]" :alt="product.name" class="product-image" />
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>
