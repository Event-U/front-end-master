<template>
  <div class="container">
    <h1>
      {{activeUser}}
    </h1>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name:'Inicio',
  mounted () {
    this.$store.commit('change', '¡Comencemos!')
  },
  computed:{
    ...mapState(['activeUser'])
    },
}
</script>

<style>
.container-fluid {
  min-height: 100vh;
  padding:0;
}

</style>

