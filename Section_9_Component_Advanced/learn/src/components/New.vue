<template>
  <div>
    <h2>New Quote</h2>
    <button @click="counter++">Increase</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed(){
      console.log('Destroyed'); 
  },
  deactivated(){
      console.log('Deactivated');
  },
  activated(){
       console.log('Activated');
  }
};
</script>

<style scoped>
</style>