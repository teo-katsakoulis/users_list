<template>
  <b-card class="newsfeed-form-card shadow-sm mx-auto">
    <b-form @submit.prevent="editNewsFeed()">
      <b-form-input v-model="editNewsfeed.title" name="title" :placeholder="news_feed.title" class="mb-2" />
      <b-form-input v-model="editNewsfeed.body" name="body" :placeholder="news_feed.body" class="mb-2" />
      <b-form-input v-model="editNewsfeed.author" name="author" :placeholder="news_feed.author" class="mb-4" />
      <div class="form-footer">
        <b-button type="submit" variant="outline-primary">Save</b-button>
        <b-button variant="outline-primary ml-2" @click="$bvModal.hide('edit-news-modal')">Cancel</b-button>
      </div>
    </b-form>
  </b-card>
</template>

<script>
  export default {
    name: "EditNewsFeed",
    props: {
      news_feed: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        newsfeeds_copy: {},
        editNewsfeed: {
          title: '',
          body: '',
          author: ''
        }
      }
    },
    created() {
      this.newsfeeds_copy = Object.assign({}, this.$store.getters.getNewsFeeds)
    },
    methods: {
      editNewsFeed() {
        this.editNewsfeed.id = this.news_feed.id
        if (this.editNewsfeed.title === '') {
          this.editNewsfeed.title = this.news_feed.title
        }
        if (this.editNewsfeed.body === '') {
          this.editNewsfeed.body = this.news_feed.body
        }
        if (this.editNewsfeed.author === '') {
          this.editNewsfeed.author = this.news_feed.author
        }

        this.$store.dispatch('editNewsFeed', this.editNewsfeed)
        this.$bvModal.hide('edit-news-modal')
      }
    }
  }
</script>