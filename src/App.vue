<template>
  <HelloWorld msg="Vue 3 | Router ✈" />
  <Navbar />
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    HelloWorld: HelloWorldVue,
    Navbar: Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
