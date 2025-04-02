<script setup>
import { defineProps } from "vue";

const props = defineProps({
  subtotal: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  grandTotal: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="cart-summary">
    <h2>Cart Summary</h2>
    <p>Subtotal: ${{ props.subtotal.toFixed(2) }}</p>
    <p>Tax (8%): ${{ props.tax.toFixed(2) }}</p>
    <p>Grand Total: ${{ props.grandTotal.toFixed(2) }}</p>
    <button>Checkout</button>
  </div>
</template>
