<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <button @click="navigateToHome">Go to Home</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  // Follow the change of id
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push({ name: 'home' });
    }
  }
};
</script>