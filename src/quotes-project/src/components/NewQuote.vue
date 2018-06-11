<template>
  <div class="row">
    <form class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3">
      <div class="form-group">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        quote: ""
      };
    },

    methods: {
      createNew() {
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  };
</script>

<style scoped>
</style>
