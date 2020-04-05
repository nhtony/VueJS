<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-bind:myIdx="n" v-for="n in 5" :key="n"></app-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server";
export default {
  components: {
    "app-server": Server
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>