<template>
  <b-card
    :title="news_feed.title"
    class="border-0 shadow mb-3"
  >
    <b-card-text class="mt-4">{{ news_feed.body }}</b-card-text>
    <b-card-text class="border-top border-light pt-2 text-primary">{{ news_feed.author }}</b-card-text>
  </b-card>
</template>

<script>
  export default {
    name: "NewsFeedCard",
    props: {
      news_feed: {
        type: Object,
        required: true
      }
    }
  }
</script>