<template>
  <div class="nav">
    <router-link class="link" to="/component1">Component 1</router-link> |
    <router-link class="link" to="/component2">Component 2</router-link> |
    <router-link class="link" to="/component3">Component 3</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  text-decoration: none;
  font-family: sans-serif;
  color: #d33476;
}
</style>
