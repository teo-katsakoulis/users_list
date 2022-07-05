<template>
  <div>
    <b-navbar 
      toggleable="lg" 
      type="dark" 
      variant="info"
    >
      <b-navbar-nav class="main-nav mx-auto">
        <h4 class="text-light mt-2">UsersList Challenge</h4>
      </b-navbar-nav>
    </b-navbar>
    <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>