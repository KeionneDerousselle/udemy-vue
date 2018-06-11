<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-details :age="age" :name="name" @nameWasReset="name = $event"></app-user-details>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :age="age" @ageWasEdited="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetails from "./UserDetails.vue";
  import UserEdit from "./UserEdit.vue";

  export default {
    data: function() {
      return {
        name: 'Keionne',
        age: 24
      };
    },

    methods: {
      changeName(){
        this.name = 'Kei'
      }
    },

    components: {
      appUserDetails: UserDetails,
      appUserEdit: UserEdit
    }
  };
</script>

<style>
</style>
