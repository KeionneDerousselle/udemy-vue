<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Clicks: {{ clicks }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as types from '../store/types';

  export default {
    computed: {
      myOwnComputed() {
        // this way you can use your own computed properties with map getters
      },
      ...mapGetters({
        counter: types.DOUBLE_COUNTER,
        clicks: types.CLICK_COUNTER
      })
    }
  };
</script>
