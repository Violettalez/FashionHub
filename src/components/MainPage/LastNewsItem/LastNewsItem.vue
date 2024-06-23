<template>
  <div class="lastN">
    <img :src="lastNew.image" :alt="lastNew.title" />
    <h2>{{ lastNew.title }}</h2>
    <div class="infoN">
      <div class="date">
        <p>
          <font-awesome-icon :icon="['fas', 'clock']" class="icon" />{{
            lastNew.dateCreate
          }}
        </p>
      </div>
      <div class="comments">
        <p>
          <font-awesome-icon :icon="['fas', 'comment']" class="icon" />{{
            lastNew.comments
          }}
          Comments
        </p>
      </div>
      <a href="#">read more</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "LastNewsItem",
  props: {
    lastNew: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style src="./LastNewsItem.css"></style>
