import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './user.module.js'
import NewsFeedsModule  from './newsfeeds.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: UserModule,
    newsfeeds: NewsFeedsModule
  }
})