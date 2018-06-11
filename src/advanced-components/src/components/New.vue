<template>
  <div>
    <h3>New</h3>
    <button @click="counter++">Increment the Counter</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        counter: 0
      };
    }
  };
</script>

<style scoped>
</style>
