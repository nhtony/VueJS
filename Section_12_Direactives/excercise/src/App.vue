<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-customOn:click= "clicked" class="btn btn-primary">Click</button>
        <hr>
        <div v-customOn:mouseenter="mouseEnter" v-customOn:mouseleave="mouseLeave" style="width: 100px; height: 100px; background-color: lightgreen"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("Was clicked!");
    },
    mouseEnter() {
      console.log("mouseEnter");
    },
    mouseLeave() {
      console.log("mouseLeave");
    }
  }
};
</script>

<style>
</style>
