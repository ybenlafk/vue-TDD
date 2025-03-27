<script scoped>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductSort",
  props: {
    currentSort: {
      type: String,
      default: "default",
    },
  },
  emits: ["sort-change"],
  setup(props, { emit }) {
    const sortOptions = ref([
      { value: "default", label: "Default" },
      { value: "price-asc", label: "Price: Low to High" },
      { value: "price-desc", label: "Price: High to Low" },
      { value: "rating", label: "Rating: High to Low" },
    ]);

    const handleSortChange = (value) => {
      emit("sort-change", value);
    };

    return {
      sortOptions,
      handleSortChange,
    };
  },
});
</script>

<template>
  <div>
    <span>Sort by:</span>
    <div>
      <button
        v-for="option in sortOptions"
        :key="option.value"
        @click="handleSortChange(option.value)"
        :class="{ active: currentSort === option.value }"
        :data-selected="currentSort === option.value"
        :data-value="option.value"
        data-test="sort-option"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>