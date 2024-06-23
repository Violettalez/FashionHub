<template>
  <div class="main">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider1">
            <div class="info">
              <h1>Fashion Trends</h1>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit
              </p>
              <button type="button">shop now</button>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider2">
            <div class="info">
              <h1>more shares</h1>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit
              </p>
              <button type="button">shop now</button>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider3">
            <div class="info">
              <h1>New collections</h1>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit
              </p>
              <button type="button">shop now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="categories">
      <div class="classified-categories">
        <div class="info">
          <h3>Classified Categories</h3>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh
          </p>
        </div>
      </div>
      <CategoryListVue />
    </div>
    <div class="picture-most-popular">
      <div class="info">
        <span>Most</span>
        <h1>Popular</h1>
      </div>
    </div>
    <div class="mp-product-back">
      <ProductList :products="productsFirst" />
    </div>
    <div class="new-arrivals">
      <div class="info">
        <span>New</span>
        <h1>Arrivals</h1>
      </div>
    </div>
    <div class="mp-product-back">
      <ProductList :products="productsSecond" />
    </div>
    <div class="news">
      <div class="new-shop">
        <div class="info">
          <h2>New</h2>
          <h1>Store</h1>
          <button>shop now</button>
        </div>
      </div>
      <div class="new-collection">
        <div class="info">
          <h2>New</h2>
          <h1>Collection</h1>
          <button>shop now</button>
        </div>
      </div>
    </div>
    <div class="latest-news">
      <div class="title">
        <h3>Latest News</h3>
        <p>
          Nam ac egestas est. Mauris et pulvinar risus, at tincidunt lorem.
          Maecenas tristique sit amet odio sit amet aliquet. Quisque a pharetran
          ultrices diam, eget sodales ligula.
        </p>
      </div>
      <LastNewsList />
    </div>
  </div>
</template>

<script>
import CategoryListVue from "./CategoryList/CategoryList.vue";
import ProductList from "./ProductList/ProductList.vue";
import { productsFirst, productsSecond } from "./products";
import LastNewsList from "./LastNewsList/LastNewsList.vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

export default {
  components: {
    CategoryListVue,
    ProductList,
    LastNewsList,
  },
  data() {
    return {
      productsFirst,
      productsSecond,
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        slidesPerView: 1,
        direction: "horizontal",
        loop: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
        speed: 1200,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>

<style src="./MainPage.css"></style>
