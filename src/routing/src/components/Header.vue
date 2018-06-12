<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link
      class="navbar-brand"
      href="#"
      to="/"
    >
      Vue Routing
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          class="nav-item"
          exact
          to="/"
          tag="li"
          active-class="active"
        >
          <a class="nav-link" href="#">Home</a>
        </router-link>
        <router-link
          class="nav-item"
          to="/user/10"
          tag="li"
          active-class="active"
        >
          <a class="nav-link" href="#">User</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
