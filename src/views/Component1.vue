<template>
  <div>
    <h2>Component 1</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Component 1",
  props: {
    title: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
