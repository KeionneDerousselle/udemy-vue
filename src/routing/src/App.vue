<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components: {
      'app-header': Header
    }
  };
</script>

<style scoped>
</style>

