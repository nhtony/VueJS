new Vue({
    el: '#exercise',
    data: {
        myInfo: {
            name: 'Hao',
            age:22
        },
        img: 'https://cloudfour.com/examples/img-currentsrc/images/kitten-large.png'
    },
    methods: {
        random: function(){
            return Math.random();
        }
    }
});