<template>
  <div>
    <router-view name="header-top"></router-view>
    <div class="container">
      <router-view></router-view>
    </div>
    <router-view name="header-bottom"></router-view>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";

  export default {
    components: {
      "app-header": Header
    }
  };
</script>

<style scoped>
</style>

