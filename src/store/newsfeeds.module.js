export default {
  state: {
    total_newsfeeds: []
  },
  mutations: {
    addNewsFeed(state, payload) {
      state.total_newsfeeds = payload
    },
    updateNewsFeed(state, payload) {
      const total_newsfeeds = state.total_newsfeeds.slice()
      let index = total_newsfeeds.findIndex((t) => t.id == payload.id)
      if (index != -1) {
        total_newsfeeds[index] = payload
      }
      state.total_newsfeeds = total_newsfeeds
    }
  },
  getters: {
    getNewsFeeds: state => {
      return state.total_newsfeeds
    }
  },
  actions: {
    addToNewsFeeds(context, payload) {
      const total_newsfeeds = context.state.total_newsfeeds
      total_newsfeeds.push(payload)
      context.commit('addNewsFeed', total_newsfeeds)
    },
    editNewsFeed(context, payload) {
      context.commit("updateNewsFeed", payload)
    }
  }
}