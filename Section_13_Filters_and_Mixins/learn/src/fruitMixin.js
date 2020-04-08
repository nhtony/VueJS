export const fruitMixin = {
    data(){
        return {
            fruits: ['Apple','Banana','Mango','Lemon'],
            filterText: ''
        }
    },
    computed: {
        filterFruits(){
            return this.fruits.filter((ele)=> {
                return ele.match(this.filterText);
            })
        }
    },
    created(){
        console.log('Created');
    }
}