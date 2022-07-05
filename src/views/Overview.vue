<template>
  <div class="container w-50 mx-auto">
    <b-button 
      variant="outline-primary"
      block 
      tag="router-link"
      :to="{ name: 'user', params: { editing: false, id: 'new' } }"
    >
      + Add a User
    </b-button>

    <!-- Display all users -->
    <h2 v-if="$store.state.users_list.length" class="font-weight-bold mb-3 mt-4 text-primary">Users List</h2>
    <div v-for="user in $store.state.users_list" :key="user.id">
      <user-card :user="user"/>
    </div>
  </div>
</template>

<script>
  import UserCard from '../components/UserCard.vue'
  export default {
    name: "HomeView",
    components: { UserCard }
  }
</script>

<style lang="scss">
  .container {
    padding: 0;
    
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }
</style>
