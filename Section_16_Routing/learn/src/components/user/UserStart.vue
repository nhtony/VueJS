<template>
  <div>
    <p>Please select a User</p>
    <hr />
    <ul class="list-group">
      <router-link to="/user/1" tag="li" class="list-group-item" style="cursor: pointer">User 1</router-link>
      <router-link to="/user/2" tag="li" class="list-group-item" style="cursor: pointer">User 2</router-link>
      <router-link to="/user/3" tag="li" class="list-group-item" style="cursor: pointer">User 3</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>