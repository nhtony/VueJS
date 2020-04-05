const data =
{
  title: 'The VueJS Instance',
  showParagraph: false
}

Vue.component('comp', {
  template: '<h1>Component</h1>'
})

const vm1 = new Vue({
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');


console.log(vm1.data === data);
vm1.$refs.heading.innerText = 'Something else';

// setTimeout(() => {
//   vm1.title = 'Change by Timer'
// }, 3000);


const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The VueJS Instance Second'
  },
  methods: {
    onChange: function () {
      vm1.title = 'Title has changed'
    }
  }
});

const vm3 = new Vue({
  template: '<h1>Hello</h1>'
});

// vm3.$mount('#app3');
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);


new Vue({
  el: '#app',
  data: {
    title: 'VueJS life-cycle'
  },
  beforeCreate: function () {
    console.log('beforeCreate()');
  },
  created: function () {
    console.log('created()');
  },
  beforeMount: function () {
    console.log('beforeMount()');
  },
  mounted: function () {
    console.log('mounted()');
  },
  beforeUpdate: function () {
    console.log('beforeUpdate()');
  },
  updated: function () {
    console.log('updated()');
  },
  beforeDestroy: function () {
    console.log('beforeDestroy()');
  },
  destroyed: function () {
    console.log('destroyed()');
  },
  methods : {
    vueDestroy: function(){
      this.$destroy();
    }
  }
})