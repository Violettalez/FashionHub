<template>
  <div class="product-list">
    <ProductItem
      v-for="product in mappedProducts"
      :key="product.title"
      :product="product"
    />
  </div>
</template>

<script>
import ProductItem from "../ProductItem/ProductItem.vue";

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  computed: {
    mappedProducts() {
      console.log("Products prop:", this.products);
      if (!this.products) {
        return [];
      }
      return this.products.map((product) => ({
        title: product.title,
        image: product.image,
        price: product.price,
      }));
    },
  },
};
</script>

<style src="./ProductList.css"></style>
