<template>
  <div>
    <app-sever-status v-for="server in 5" :key="server"></app-sever-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus";
export default {
  components: {
    "app-sever-status": ServerStatus
  }
};
</script>

<style>
</style>