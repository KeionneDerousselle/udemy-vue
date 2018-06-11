<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <button @click="onReset()">Reset Name</button>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      onReset: {
        type: Function,
        required: true
      }
    },
    methods: {
      switchName() {
        return this.name.split('').reverse().join('');
      },

      resetName() {
        // this.name = 'Keionne';
        // this.$emit('nameWasReset', this.name);
      }
    }
  }
</script>

<style>
</style>
