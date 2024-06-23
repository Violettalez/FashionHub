<template>
  <div class="category-list">
    <CategoryItem
      v-for="category in mappedCategories"
      :key="category.caption"
      :category="category"
    />
    <a href="#" class="more-categories">
      <p>view more categories</p>
    </a>
  </div>
</template>

<script>
import CategoryItem from "../CategoryItem/CategoryItem.vue";
import { categories } from "./categories";

export default {
  name: "CategoryList",
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories,
    };
  },
  computed: {
    mappedCategories() {
      const mapped = this.categories.map((category) => ({
        caption: category.caption,
        image: category.image,
      }));
      return mapped;
    },
  },
};
</script>

<style scoped src="./CategoryList.css"></style>
