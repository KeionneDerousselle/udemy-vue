<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
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
  import Quotes from "./components/Quotes.vue";
  import NewQuote from "./components/NewQuote.vue";
  import Header from "./components/Header.vue";

  export default {
    data: function() {
      return {
        maxQuotes: 10,
        quotes: ["Just a quote to see something"]
      };
    },

    methods: {
      newQuote(quote) {
        if(this.quotes.length >= this.maxQuotes) {
          return alert('Pleate delete quotes first!');
        }

        this.quotes.push(quote);
      },

      deleteQuote(index) {
        this.quotes.splice(index, 1);
      }
    },

    components: {
      "app-quotes": Quotes,
      "app-new-quote": NewQuote,
      "app-header": Header
    }
  };
</script>

<style>
</style>
