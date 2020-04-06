<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" 
      :value="firstName" @input="nameChange(true,$event)" />
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" 
      :value="lastName" @input="nameChange(false,$event)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    nameChange(isFirst, event) {
      let name = "";
      if (isFirst) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.firstName + " " + event.target.value;
      }
      this.value = name;
      this.$emit('input',this.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>

<style scoped>
</style>