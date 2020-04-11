<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/" tag="li" exact active-class="active">
          <a class="m-2">Home</a>
        </router-link>
        <router-link to="/user" tag="li" active-class="active">
          <a class="m-2">User</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
li.active {
  background-color: #41b883;
}
</style>