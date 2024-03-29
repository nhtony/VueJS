import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    loadServerDetail(detail) { 
      this.$emit('emitServer',detail);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
