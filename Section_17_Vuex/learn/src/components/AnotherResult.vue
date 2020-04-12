<template>
  <div>
    <!-- <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{stringCounter}}</p>-->
    <p>Counter is: {{ counter }}</p>
    <p>Number of Clicks: {{clicks}}</p>
    <hr />
    <input type="text" v-model="value" />
    <!-- <input type="text" :value="value" @input="updateValue" /> -->
    <p>{{value}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  //   computed: mapGetters(["doubleCounter", "stringCounter"])
  //   computed: mapGetters({
  //     counter: "doubleCounter",
  //     clicks: "stringCounter"
  //   })

  computed: {
    ...mapGetters({
      counter: types.DOUBLE_COUNTER,
      clicks: types.CLICK_COUNTER
    }),
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  }
  // methods: {
  //   updateValue(event) {
  //     this.$store.dispatch("updateValue", event.target.value);
  //   }
  // }
};
</script>