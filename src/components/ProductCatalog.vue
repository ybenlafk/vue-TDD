<script setup>
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore.js";
import ProductFilter from "./ProductFilter.vue";
import ProductSort from "./ProductSort.vue";
import ProductCard from "./ProductCard.vue";

const productStore = useProductStore();
const { filteredProducts, selectedCategory, searchQuery, sortOption } =
  storeToRefs(productStore);
</script>

<template>
  <div>
    <ProductFilter
      :categories="productStore.categories"
      :selectedCategory="selectedCategory"
      @category-change="productStore.setCategory"
      @search-change="productStore.setSearchQuery"
    />

    <ProductSort
      :sortOption="sortOption"
      @sort-change="productStore.setSortOption"
    />

    <div>
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-if="filteredProducts.length === 0">
      <p>No products found.</p>
    </div>
  </div>
</template>
