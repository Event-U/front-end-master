<template>
  <div class="container">
    <h1 class="welcome">
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

<style lang='scss'>
.welcome{
  @extend .h1-font;
}
@font-face {
    font-family: 'futura';
    src: url('~@/assets/fonts/futura-bold-03-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/futura-bold-03-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'futura';
    src: url('~@/assets/fonts/futura-medium-01-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/futura-medium-01-webfont.woff') format('woff');
    font-weight: normal;
    font-style: bold;
}
@font-face {
    font-family: 'lato';
    src: url('~@/assets/fonts/lato-regular-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/lato-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: 'Bw Modelica';
    src: url('~@/assets/fonts/bwmodelica-bold-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/bwmodelica-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: bolder;

}




@font-face {
    font-family: 'Bw Modelica';
    src: url('~@/assets/fonts/bwmodelica-bolditalic-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/bwmodelica-bolditalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}




@font-face {
    font-family: 'Bw Modelica';
    src: url('~@/assets/fonts/bwmodelica-extrabold-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/bwmodelica-extrabold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: bold;

}




@font-face {
    font-family: 'Bw Modelica';
    src: url('~@/assets/fonts/bwmodelica-extrabolditalic-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/bwmodelica-extrabolditalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: bold italic;

}




@font-face {
    font-family: 'Bw Modelica';
    src: url('~@/assets/fonts/bwmodelica-medium-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/bwmodelica-medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'Bw Modelica';
    src: url('~@/assets/fonts/bwmodelica-regular-webfont.woff2') format('woff2'),
         url('~@/assets/fonts/bwmodelica-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
</style>

