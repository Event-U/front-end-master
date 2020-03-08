<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  name:'Inicio',
  mounted () {
    this.$store.commit('change', '¡Comencemos!')
  }
}
</script>

<style>
.container-fluid {
  min-height: 100vh;
  padding:0;
}

</style>

