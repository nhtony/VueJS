<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded ID: {{id}}</p>
    <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name: "editUser",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    // can not use this.link here
    if (true) {
      next();
    } else{
      next(false);
    }
  }
};
</script>