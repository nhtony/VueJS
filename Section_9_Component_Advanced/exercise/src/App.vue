<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="selectedBox = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="selectedBox = 'appGreen'" class="btn btn-success">Load Green Template</button>
        <button @click="selectedBox = 'appRed'" class="btn btn-danger">Load Red Template</button>
        <hr />
        <component :is="selectedBox">
          <p>Default Content</p>
        </component>
        <!-- <app-blue>This is a Blue box</app-blue>
                <app-green>This is a Green box</app-green>
        <app-red>This is a Red box</app-red>-->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      selectedBox: "appBlue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
