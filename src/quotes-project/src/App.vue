<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quotes :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotes>
    <div class="row my-3">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Quotes from './components/Quotes.vue';
  import NewQuote from './components/NewQuote.vue';

  export default {
    data: function() {
      return {
        maxQuotes: 10,
        quotes: [
          'Just a quote to see something'
        ]
      };
    },

    methods: {
      newQuote(quote) {
        this.quotes.push(quote);
      },

      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    },

    components: {
      'app-quotes': Quotes,
      'app-new-quote': NewQuote
    }
  };
</script>

<style>
</style>
