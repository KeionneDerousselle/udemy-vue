new Vue({
  el: '#app',
  data: {
    attachRed: false
  },

  methods: {
    changeLink: function() {
      this.link = 'http://apple.com'
    }
  }
});