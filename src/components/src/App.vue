<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <app-servers></app-servers>
        <app-server-details></app-server-details>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './common/Header.vue';
  import Footer from './common/Footer.vue';
  import Servers from './servers/Servers.vue';
  import ServerDetails from './servers/ServerDetails.vue';

  export default {
    components: {
      'app-header': Header,
      'app-servers': Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer
    }
  };
</script>

<style>
</style>
