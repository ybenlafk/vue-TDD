<script>
import { defineProps, computed } from "vue";

const props = defineProps({
  cartItem: {
    type: Object,
    required: true,
  },
});
const itemTotal = computed(() => {
  return props.cartItem.product.price * props.cartItem.quantity;
});

const updateQuantity = (newQuantity) => {
  const quantity = parseInt(newQuantity, 10);
  if (!isNaN(quantity) && quantity > 0) {
    this.$emit("update-quantity", this.cartItem.product.id, quantity);
  }
};
const removeItem = () => {
  this.$emit("remove-item", this.cartItem.product.id);
};
</script>

<template>
  <div class="cart-item">
    <img
      :src="cartItem.product.image"
      alt="Product Image"
      class="product-image"
    />
    <div class="product-details">
      <h3>{{ cartItem.product.name }}</h3>
      <p>Price: ${{ cartItem.product.price.toFixed(2) }}</p>
      <div class="quantity-control">
        <label for="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          :value="cartItem.quantity"
          @input="updateQuantity($event.target.value)"
          min="1"
        />
      </div>
      <p>Total: ${{ itemTotal.toFixed(2) }}</p>
      <button @click="removeItem">Remove</button>
    </div>
  </div>
</template>
