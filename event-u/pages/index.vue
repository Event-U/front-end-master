<template>
  <div class="container">

  </div>
</template>

<script>
export default {
name:'',
 computed: {
     setActivePage() {
      return this.$store.commit('change', '')
    }}
}
</script>

<style>
.container-fluid {
  min-height: 100vh;
  padding:0;
}

</style>

