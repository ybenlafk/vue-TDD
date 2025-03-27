import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    items: [],
    totalItems: 0,
    subtotal: 0,
    tax: 0,
    grandTotal: 0,
  }),

  actions: {
    addToCart(item) {
      const existingItem = this.items.find((i) => i.product.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ product: item, quantity: 1 });
      }
      this.totalItems += 1;
      this.subtotal += item.price;
      this.tax = this.subtotal * 0.08;
      this.grandTotal = this.subtotal + this.tax;
    },

    updateQuantity(id, quantity) {
      const item = this.items.find((i) => i.product.id === id);
      if (item) {
        const difference = quantity - item.quantity;
        item.quantity = quantity;
        this.totalItems += difference;
        this.subtotal += difference * item.product.price;
      }
    },

    removeFromCart(id) {
      const index = this.items.findIndex((i) => i.product.id === id);
      if (index !== -1) {
        const item = this.items[index];
        this.totalItems -= item.quantity;
        this.subtotal -= item.quantity * item.product.price;
        this.items.splice(index, 1);
      }
    },

    clearCart() {
      this.items = [];
      this.totalItems = 0;
      this.subtotal = 0;
    },
  },
});
