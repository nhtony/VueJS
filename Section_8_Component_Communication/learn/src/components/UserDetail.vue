<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>UserName: {{myName}}</p>
    <p>UserAge: {{myAge}}</p>
    <p>ReverseName: {{switchName()}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFun">Reset Name 2</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    myName: {
      type: String
    },
    resetFun: {
      type: Function
    },
    myAge: Number
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join();
    },
    resetName() {
      this.myName = "Hao";
      this.$emit("nameWasReset", this.myName);
    }
  },
  created() {
    eventBus.$on("emitAge", age => {   
      this.myAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
