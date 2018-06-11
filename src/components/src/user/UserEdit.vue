<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ age }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    props: {
      age: {
        type: Number,
        required: true
      }
    },

    methods: {
      editAge() {
        this.age = 23;
        eventBus.changeAge(this.age);
      }
    }
  };
</script>

<style>
</style>
