<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Clicks: {{ clicks }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters({
      counter: 'doubleCounter',
      clicks: 'stringCounter'
    })
  };
</script>
