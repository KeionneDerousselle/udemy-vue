<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card quote">
      <div class="card-header">
        <slot name="title">Quote Title</slot>
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p><slot></slot></p>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>

<style scoped>
  .quote {
    cursor: pointer;
  }

  .quote:hover {
    background-color: #ffe2e2;
  }
</style>
