<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{myAge}}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    myAge: {
      type: Number
    }
  },
  methods: {
    editAge() {
      this.myAge = 30;
      // this.$emit('emitAge', this.myAge);
      //   eventBus.$emit("emitAge", this.myAge);
      eventBus.changeAge(this.myAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
