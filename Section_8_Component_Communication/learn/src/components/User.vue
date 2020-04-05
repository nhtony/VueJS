<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <p>Name: {{name}}</p>
    <p>Age: {{age}}</p>
    <button @click="changeName">Change Name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="name" @nameWasReset="name = $event" :resetFun="resetName" :myAge="age"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :myAge="age" @emitAge="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return { name: "Hao" , age: 22};
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = "Loan";
    },
    resetName() {
      this.name = "Hao";
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
