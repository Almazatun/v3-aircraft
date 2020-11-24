<template>
  <div>
    <h2>Component 3</h2>
  </div>
</template>

<script>
export default {
  name: "Component 3",
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
