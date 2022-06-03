export default {
  namespaced: true,
  state: {
    firstName: 'Theofilos',
    lastName: 'Katsakoulis'
  },
  getters: {
    fullName: function (state) {
      return `${state.firstName} ${state.lastName}`
    }
  }
}