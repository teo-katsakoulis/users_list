<template>
  <div class="w-50 mx-auto">
    <b-row class="mb-4">
      <b-col>
        <b-button v-b-modal.create-news-modal :disabled="searchQuery !== ''" variant="outline-primary">+ Create a Newsfeed</b-button>
      </b-col>
      <b-col>
        <b-form-input type='text' placeholder='Search for newsfeeds...' v-model='searchQuery' />
      </b-col>
    </b-row>

    <div v-if="searchQuery === ''">
      <!-- Create a newsfeed -->
      <b-modal id="create-news-modal" hide-footer title="Create a Newsfeed">
        <create-news-feed />
      </b-modal>
      
      <!-- Display all newsfeeds -->
      <h2 v-if="$store.state.newsfeeds.total_newsfeeds.length" class="font-weight-bold mb-3 mt-4 text-primary">NewsFeeds</h2>
      <div v-for="news_feed in $store.state.newsfeeds.total_newsfeeds" :key="news_feed.id">
        <news-feed-card :news_feed="news_feed" @click.native="editNewsFeed(news_feed)" v-b-modal.edit-news-modal />
      </div>
    </div>

    <!-- Edit selected newsfeed -->
    <b-modal id="edit-news-modal" hide-footer title="Edit the Newsfeed">
      <edit-news-feed :news_feed="selected_news_feed" />
    </b-modal>

    <!-- Search and sort newsfeeds -->
    <div v-if="searchQuery !== ''">
      <b-row>
        <b-col>
          <h2><span class="text-primary">Filter:</span> {{searchQuery}}</h2>
        </b-col>
        <b-col cols="12" md="auto" align-self="end" class="text-right">
          <h5 class="text-primary">{{filterNewsFeeds.length}} results</h5>
        </b-col>
      </b-row>
      <b-row align-h="end" class="mt-3 mb-3">
        <b-col md="auto">
          <b-form-select v-model="sortBy" class="sort-by">
            <b-form-select-option value="title">Title</b-form-select-option>
            <b-form-select-option value="body">Body</b-form-select-option>
            <b-form-select-option value="author">Author</b-form-select-option>
          </b-form-select>
        </b-col>
        <b-col md="auto">
          <b-form-select v-model="sortDirection" class="sort-by">
            <b-form-select-option value="asc">Ascending</b-form-select-option>
            <b-form-select-option value="desc">Descending</b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>
      
      <!-- Display filtered newsfeeds -->
      <div v-for="news_feed in filterNewsFeeds" :key="news_feed.id">
        <news-feed-card :news_feed="news_feed" @click.native="editNewsFeed(news_feed)" v-b-modal.edit-news-modal />
      </div>
    </div>
  </div>
</template>

<script>
  import NewsFeedCard from '@/components/NewsFeedCard.vue'
  import CreateNewsFeed from '@/components/CreateNewsFeed.vue'
  import EditNewsFeed from '@/components/EditNewsFeed.vue'
  export default {
    name: "HomeView",
    components: {
      NewsFeedCard,
      CreateNewsFeed,
      EditNewsFeed
    },
    data() {
      return {
        selected_news_feed: null,
        searchQuery: '',
        sortBy: 'title',
        sortDirection: 'asc'
      }
    },
    computed: {
      filterNewsFeeds() {
        let outer_this = this;
        return this.$store.getters.getNewsFeeds
            .filter(s => s.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            .sort(function(a, b) {
              let newsfeed_a = {}, newsfeed_b = {}
              if (outer_this.sortBy === 'title') {
                newsfeed_a = a.title
                newsfeed_b = b.title
              } 
              else if (outer_this.sortBy === 'body') {
                newsfeed_a = a.body
                newsfeed_b = b.body
              } 
              else {
                newsfeed_a = a.author
                newsfeed_b = b.author
              }

              if (newsfeed_a.toLowerCase() < newsfeed_b.toLowerCase()) { if (outer_this.sortDirection === 'asc') return -1; else return 1 }
              if (newsfeed_a.toLowerCase() > newsfeed_b.toLowerCase()) { if (outer_this.sortDirection === 'asc') return 1; else return -1 }
              return 0
            });
      }
    },
    methods: {
      editNewsFeed(news_feed) {
        this.selected_news_feed = news_feed
      }
    }
  }
</script>

<style lang="scss">
  .modal {
    .modal-header {
      .modal-title {
        color: #007bff;
      }
    }
    .modal-body {
      padding: 0;
    }
  }
</style>
