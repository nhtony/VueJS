<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <hr />
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h3>Exercise 1</h3>
        <p>{{text | reverseText}}</p>
        <hr />
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <h3>Exercise 2</h3>
        <p>{{text | word-length}}</p>
        <hr />
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <h3>Exercise 3</h3>
        <p>{{textReverse}}</p>
        <p>{{wordLength}}</p>
        <hr />
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <h3>Exercise 4</h3>
        <p>{{textReverse}}</p>
        <p>{{wordLength}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { textMixin } from "./textMixin";
export default {
  mixins: [textMixin],
  filters: {
    reverseText(value) {
      return value
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
</style>
