<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Detail</p>
    <p>Server# {{this.serverDetail.id}} - Status: {{this.serverDetail.status}}</p>
    <button @click="changeStatus">Change to Normal</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data: function() {
    return {
      serverDetail: {}
    };
  },
  methods: {
    changeStatus(){
      this.serverDetail.status = 'Normal';
    }
  },
  created() {
    eventBus.$on("emitServer", detail => {
      this.serverDetail = detail;
    });
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
