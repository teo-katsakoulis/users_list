<template>
  <div>
    <b-navbar 
      toggleable="lg" 
      type="dark" 
      variant="info"
    >
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="main-nav mx-auto">
          <router-link to="/">Home</router-link>
          <router-link to="/page1">Sample Page 1</router-link>
          <router-link to="/page2">Sample Page 2</router-link>
          <router-link to="/page3">Sample Page 3</router-link>
        </b-navbar-nav>
      </b-collapse>
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

  .main-nav {
    a {
      text-decoration: none;
      color: #fff;
      padding: 10px;
      margin: 20px 20px 10px;

      &:hover {
        text-decoration: none;
        color: #fff;
      }
    }

    .router-link-exact-active {
      font-weight: 700;
      border-bottom: 1px solid #ddd;
    }
  }
</style>