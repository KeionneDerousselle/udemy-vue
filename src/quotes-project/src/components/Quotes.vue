<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="quote"
      @click.native="deleteQuote(index)"
    >
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    props: {
      quotes: {
        type: Array,
        required: true
      }
    },

    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index);
      }
    },

    components: {
      'app-quote': Quote
    }
  };
</script>

<style scoped>
</style>


