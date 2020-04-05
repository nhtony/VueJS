// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'https://vuejs.org',
		finishedLink: `<a href="http://google.com">Google</a>`,
		count: 0,
		count2: 0,
		x:0,
		y:0,
		name: "Hao",
		attached: false,
		color : "green",
		width: 140
	},
	computed: {
        output: function(){
			console.log('computed');
			return this.count > 5 ? 'Greater than 5' : 'Smaller than 5'
		},
		divClass: function() {
			return {
				red: this.attached,
				blue: !this.attached
			}
		},
		myStyle :function(){
			return {
				backgroundColor: this.color,
				width : this.width + 'px'
			}
		}
	},
	methods: {
		sayHello : function() {
			this.title = 'Hello' ;
			return this.title;
		},
		increase: function(step, event){
			this.count += step;
		},
		coordinate: function(event){
			 this.x = event.clientX;
			 this.y = event.clientY;
		},
		alertMe : function(){
			alert('alert');
		},
		result: function(){
			console.log('methods');
			return this.count > 5 ? 'Greater than 5' : 'Smaller than 5'
		}
	},
	watch: {
		count: function(value){
			var vm = this;
			setTimeout(() => {
				vm.count = 0;
			}, 2000);
		}
	}
})