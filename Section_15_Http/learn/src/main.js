import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-http-fcfc9.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.methods === 'POST') {
    request.methods = 'PUT';
  }
  next(response => {
    response.json = () => { return { message: response.data } }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
