<template>
  <div class="w-50 mx-auto text-center">
    <h5 class="mt-4">We couldn't find the page you are looking for :(</h5>
    <b-button variant="outline-primary mt-3" @click="$router.go(-1)">Go back Home?</b-button>
  </div>
</template>

<script>
  export default {
    name: "PageNotFound"
  }
</script>