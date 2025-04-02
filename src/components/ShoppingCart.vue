<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cartStore";
import CartItem from "@/components/CartItem.vue";
import CartSummary from "@/components/CartSummary.vue";

const cartStore = useCartStore();
const { items, totalItems, subtotal, tax, grandTotal } = storeToRefs(cartStore);

const updateQuantity = (id, quantity) => {
  cartStore.updateQuantity(id, quantity);
};

const removeItem = (id) => {
  cartStore.removeFromCart(id);
};
</script>

<template>
  <div class="shopping-cart">
    <h1>Your Cart ({{ totalItems }} items)</h1>
    <div v-if="items.length === 0" class="empty-cart">
      <p>Your cart is empty.</p>
      <button>Continue Shopping</button>
    </div>
    <div v-else>
      <CartItem
        v-for="item in items"
        :key="item.product.id"
        :cartItem="item"
        @update-quantity="updateQuantity"
        @remove-item="removeItem"
      />
      <CartSummary :subtotal="subtotal" :tax="tax" :grandTotal="grandTotal" />
    </div>
  </div>
</template>
