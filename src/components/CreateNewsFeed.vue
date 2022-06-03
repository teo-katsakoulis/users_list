<template>
  <b-card class="newsfeed-form-card border-0">
    <b-form @submit.prevent="createNewsFeed()">
      <b-form-input v-model="newsFeed.title" name="title" placeholder="Enter title..." class="mb-2" required />
      <b-form-input v-model="newsFeed.body" name="body" placeholder="Enter body..." class="mb-2" required />
      <b-form-input v-model="newsFeed.author" name="author" placeholder="Enter author..." class="mb-4" required />
      <div class="form-footer">
        <b-button type="submit" variant="outline-primary">Save</b-button>
        <b-button variant="outline-primary ml-2" @click="$bvModal.hide('create-news-modal')">Cancel</b-button>
      </div>
    </b-form>
  </b-card>
</template>

<script>
  export default {
    name: "CreateNewsFeed",
    data() {
      return {
        newsFeed: {
          id: null,
          title: '',
          body: '',
          author: ''
        }
      }
    },
    methods: {
      createNewsFeed() {
        this.newsFeed.id = this.$store.getters.getNewsFeeds.length + 1
        this.$store.dispatch('addToNewsFeeds', this.newsFeed)
        this.$bvModal.hide('create-news-modal')
      }
    }
  }
</script>