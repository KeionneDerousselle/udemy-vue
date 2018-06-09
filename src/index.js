new Vue({
  el: '#app',
  data: {
    title: 'Hello, World!',
    link: 'http://google.com',
    finishedLink: '<a href="https://google.com">Google</a>',
    counter: 0
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },

    sayHello: function() {
      this.title = 'Something Else'
      return this.title;
    },

    increase: function() {
      this.counter++;
    }
  }
});