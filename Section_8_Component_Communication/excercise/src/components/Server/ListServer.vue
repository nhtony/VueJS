<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server :server="server" v-for="server in servers" :key="server.id"></app-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server";
export default {
  data:function(){
    return {
      servers: [{id:1, status: 'Normal'},
                {id:2, status: 'Critical'},
                {id:3, status: 'Normal'},
                {id:4, status: 'Unknown'},
                {id:5, status: 'Normal'}]
    }
  },
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