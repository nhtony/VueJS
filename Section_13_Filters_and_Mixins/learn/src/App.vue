<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase | to-lowercase}}</p>
                <hr>
                <button @click="fruits.push('Barries')">Add</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="(fruit,index) in filterFruits" :key="index">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List';
    import {fruitMixin} from './fruitMixin';
    export default {
        mixins: [fruitMixin],
        data(){
            return {
                text: 'Some text',
            }
        },
        filters: {
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
