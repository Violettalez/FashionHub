<template>
  <div class="product-item">
    <a href="#"
      ><img :src="product.image" :alt="product.title" />
      <div class="overlay">
        <h3>Show more</h3>
      </div></a
    >
    <h3>{{ product.title }}</h3>
    <p>${{ product.price }}</p>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style src="./ProductItem.css"></style>
