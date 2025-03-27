import { defineStore } from "pinia";
import { products, categories } from "../../mock-data/products";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products,
    selectedCategory: null,
    searchQuery: "",
    sortOption: "",
  }),

  actions: {
    setCategory(category) {
      this.selectedCategory = category;
    },

    setSearchQuery(query) {
      this.searchQuery = query;
    },

    setSortOption(option) {
      this.sortOption = option;
    },
  },

  getters: {
    filteredProducts: (state) => {
      let result = [...state.products];

      // Apply category filter
      if (state.selectedCategory) {
        result = result.filter(
          (product) => product.category === state.selectedCategory
        );
      }

      // Apply search filter
      if (state.searchQuery.trim()) {
        const searchLower = state.searchQuery.toLowerCase();
        result = result.filter(
          (product) =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower)
        );
      }

      // Apply sorting
      if (state.sortOption === "price-asc") {
        result.sort((a, b) => a.price - b.price);
      } else if (state.sortOption === "price-desc") {
        result.sort((a, b) => b.price - a.price);
      } else if (state.sortOption === "rating-desc") {
        result.sort((a, b) => b.rating - a.rating);
      }

      return result;
    },
  },
});
