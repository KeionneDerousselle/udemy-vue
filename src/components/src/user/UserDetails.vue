<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ age }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
  import { eventBus } from "../main";

  export default {
    props: {
      name: {
        type: String,
        required: true
      },

      age: {
        type: Number,
        required: true
      }
    },

    created() {
      eventBus.$on('ageWasEdited', data => {
        this.age = data;
      });
    },

    methods: {
      switchName() {
        return this.name
          .split("")
          .reverse()
          .join("");
      },

      resetName() {
        this.name = "Keionne";
        this.$emit("nameWasReset", this.name);
      }
    }
  };
</script>

<style>
</style>
