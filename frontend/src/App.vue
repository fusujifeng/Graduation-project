<template>
  <div id="app">
    <img alt="Vue logo" src="assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  <AdminLogin/>
    <AdminRegister/>

  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AdminLogin from "@/views/AdminLogin";
import AdminRegister from "@/views/AdminRegister";
export default {
  name: 'App',
  components: {
    AdminRegister,
    AdminLogin,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
