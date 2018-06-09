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
      // computed runs synchronously and is expected to return something
      return this.counter > 5 ? 'greater than 5' : 'less than 5';
    }
  },

  watch: {
    counter: function(value) {
      console.log('Watch executed');
      // watch can run asynchronous code blocks because it does not return a value
      // and therefore can retrieve something from the server
      var vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000)
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