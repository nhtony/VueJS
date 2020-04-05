// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		show: true,
		type: '',
		ingredients: ['beef', 'salad', 'tomato'],
		persons: [
			{ name: "Hao", age: 22, address: "Can Tho" },
			{ name: "Abc", age: 23, address: "unknown" }
		]
	}
})

