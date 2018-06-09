new Vue({
  el: '#app',
  data: {
    title: 'Hello, World!',
    link: 'http://google.com'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },

    sayHello: function() {
      this.title = 'Something Else'
      return this.title;
    }
  }
});