<template>
  <div>
    <h1>Server Status Component</h1>
    <p>Server Status: {{status}}</p>
    <hr />
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

<style>
</style>