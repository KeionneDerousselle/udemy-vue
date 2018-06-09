new Vue({
  el: '#app',
  data: {
    title: 'Hello, World!',
    link: 'http://google.com',
    finishedLink: '<a href="https://google.com">Google</a>',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },

    sayHello: function() {
      this.title = 'Something Else'
      return this.title;
    },

    increase: function(step, event) {
      this.counter += step;
    },

    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },

    dummy: function(event) {
      event.stopPropagation();
    }
  }
});