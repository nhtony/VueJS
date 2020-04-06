<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-md-4 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" row="3" v-model="quote"></textarea>
        <button class="btn btn-primary" @click.prevent="createNew">Add New Quote</button>
    </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            quote: ''
        }
    },
    methods: {
        createNew(){
            this.$emit('quoteAdded', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style scoped>
.panel-body {
  font-family: "Arizonia", cursive;
  font-size: 24px;
  color: #6e6e6e;
}
.quote {
  cursor: pointer;
}
.quote:hover {
  background: #ffe2e2;
}
</style>