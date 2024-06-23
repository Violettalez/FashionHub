<template>
  <div id="app">
    <MainHeader />
    <MainPage />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader/MainHeader.vue";
import MainPage from "./components/MainPage/MainPage.vue";
import MainFooter from "./components/MainFooter/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    MainPage,
    MainFooter,
  },
};
</script>

<style src="./reset.css"></style>
