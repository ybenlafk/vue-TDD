<script scoped>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductFilter",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    selectedCategory: {
      type: String,
      default: null,
    },
  },
  emits: ["category-change", "search-change"],
  setup(props, { emit }) {
    const handleSearchInput = (event) => {
      const searchValue = event.target.value;
      emit("search-change", searchValue);
    };

    const selectCategory = (categoryId) => {
      emit("category-change", categoryId);
    };

    return {
      handleSearchInput,
      selectCategory,
    };
  },
});
</script>

<template>
  <div>
    <div>
      <input
        type="text"
        placeholder="Search products..."
        @input="handleSearchInput"
        data-test="search-input"
      />
    </div>

    <h2>Categories</h2>
    <ul>
      <li
        :class="{ active: selectedCategory === null }"
        @click="selectCategory(null)"
        data-test="category-option"
      >
        <button>All Categories</button>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        :class="{ active: selectedCategory === category.id }"
        @click="selectCategory(category.id)"
        data-test="category-option"
      >
        <button>{{ category.name }}</button>
      </li>
    </ul>
  </div>
</template>
