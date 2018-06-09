new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter: 0,
    watchResult: ''
  },
  computed: {
    output: function() {
      console.log('Computed executed');
      return this.counter > 5 ? 'greater than 5' : 'less than 5';
    }
  },

  watch: {
    counter: function(value) {
      console.log('Watch executed');
      this.watchResult = value > 5 ? 'greater than 5' : 'less than 5';
    }
  },

  methods: {
    result: function() {
      console.log('Method executed');
      return this.counter > 5 ? 'greater than 5' : 'less than 5';
    }
  }
});