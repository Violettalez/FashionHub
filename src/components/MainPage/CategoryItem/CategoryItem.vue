<template>
  <div class="category-item">
    <a href="#">
      <div class="item">
        <div class="picture">
          <img :src="category.image" :alt="category.caption" />
        </div>
        <h3>{{ category.caption }}</h3>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped src="./CategoryItem.css"></style>
