<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- <div class="form-group">
            <label for="firstName">First Name</label>
            <input v-model="userData.firstName" type="text" class="form-control" id="firstName" />
          </div>
            <div class="form-group">
            <label for="lastName">Last Name</label>
            <input v-model="userData.lastName" type="text" class="form-control" id="lastName" />
          </div> -->
          <app-full-name v-model="userData.fullName"></app-full-name>
          <div class="form-group">
            <label for="fullname">Email</label>
            <input v-model="userData.email" type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="fullname">Password</label>
            <input v-model="userData.password" type="password" class="form-control" id="password" />
          </div>
          <div class="form-group">
            <label for>Store Data?</label>
            <label for="yes">
              <input v-model="saveData" type="radio" id="yes" value="Yes" /> Yes
            </label>
            <label for="no">
              <input v-model="saveData" type="radio" id="no" value="No" /> No
            </label>
          </div>
          <button class="btn btn-primary" @click.prevent="sumitted">Submit</button>
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{userData.fullName}}</p>
            <p>Mail: {{userData.email}}</p>
            <p>Password: {{userData.password}}</p>
            <p>Store in Database?: {{saveData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName'
export default {
  data() {
    return {
      userData: {
        fullName: "ho hao",
        email: "",
        password: ""
      },
      saveData: 'Yes',
      isSubmitted: false
    };
  },
  methods:{
    sumitted(){
      this.isSubmitted = true;
    }
  },
   components: {
    appFullName: FullName
  }
};
</script>

<style>
</style>
