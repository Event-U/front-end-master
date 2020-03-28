<template>
  <div class="container">
    <h1>
      Bienvenido a Event-u
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

<style lang='scss' scoped>
h1{
  @extend .h1-font;
}

</style>

