<template>
  <div class="lastNewsList">
    <LastNewsItem
      v-for="lastNew in mappedLastNews"
      :key="lastNew.title"
      :lastNew="lastNew"
    />
  </div>
</template>

<script>
import LastNewsItem from "../LastNewsItem/LastNewsItem.vue";
import { lastNews } from "./last-news-list";

export default {
  name: "LastNewsList",
  components: {
    LastNewsItem,
  },
  data() {
    return {
      lastNews,
    };
  },
  computed: {
    mappedLastNews() {
      const mapped = this.lastNews.map((lastNew) => ({
        image: lastNew.image,
        title: lastNew.title,
        dateCreate: lastNew.dateCreate,
        comments: lastNew.comments,
      }));
      return mapped;
    },
  },
};
</script>

<style scoped src="./LastNewsList.css"></style>
