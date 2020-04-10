<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.mail" />
        </div>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <i
            class="list-group-item"
            v-for="(u,index) in users"
            :key="index"
          >{{u.username}} - {{u.mail}}</i>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        mail: ""
      },
      users: [],
      resource:{}
    };
  },
  methods: {
    submit() {
      this.$http.post("", this.user);
      // .then(
      //   res => {
      //     console.log("submit -> res", res);
      //   },
      //   err => {
      //     console.log("submit -> err", err);
      //   }
      // );
      this.resource.saveAlt(this.user);
    },
    fetchData() {
      this.$http
        .get("")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resArray = [];
          for (const key in data) {
            resArray.push(data[key]);
          }
          this.users = resArray;
        });
    }
  },
  created() {
    const customActions = {
      saveAlt: { methods: "POST", url: "alertnative.json" }
    };
    this.resource = this.$resource("data.json", {}, customActions);
  }
};
</script>

<style>
</style>
