<template>
  <li style="cursor: pointer" @click="loadDetail" class="list-group-item">Server #{{ server.id }}</li>
</template>

<script>
import {eventBus} from '../../main';
export default {
  props: ["server"],
  methods: {
      loadDetail(){
          eventBus.loadServerDetail(this.server);
      }
  }
};
</script>

<style>
</style>