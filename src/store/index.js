import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users_list: [],
    last_userId: -1
  },
  mutations: {
    addUser(state, payload) {
      state.users_list = payload
    },
    editUser(state, payload) {
      const users_list = state.users_list.slice()
      let index = users_list.findIndex((t) => t.id == payload.id)
      if (index != -1) {
        users_list[index] = payload
      }
      state.users_list = users_list
    },
    deleteUser(state, user_id) {
      const users_list = state.users_list.slice()
      let index = users_list.findIndex((t) => t.id == user_id)
      if (index != -1) {
        users_list.splice(index, 1)
      }
      state.users_list = users_list
    }
  },
  getters: {
    getUsers: state => {
      return state.users_list
    },
    getUserById: state => id => {
      let index = state.users_list.findIndex((t) => t.id == id)
      return state.users_list[index]
    }
  },
  actions: {
    addUser(context, payload) {
      const users_list = context.state.users_list
      payload.id = ++context.state.last_userId
      users_list.push(payload)
      context.commit('addUser', users_list)
    },
    editUser(context, payload) {
      context.commit("editUser", payload)
    },
    deleteUser(context, payload) {
      context.commit("deleteUser", payload)
    }
  }
})