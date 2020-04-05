<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-list-server></app-list-server>
      <app-sidebar></app-sidebar>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header";
import ListServer from "./components/Server/ListServer";
import Footer from "./components/Shared/Footer";
import Sidebar from "./components/Shared/Sidebar";
export default {
  components: {
    'app-header': Header,
    'app-list-server': ListServer,
    'app-sidebar': Sidebar,
    'app-footer': Footer
  }
};
</script>

<style>
</style>
