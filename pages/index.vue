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
  head() {
      return {
        title: 'Inicio',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Comienza a utilizar Event-U y comienza a generar en el mercado de eventos'
            }
        ]
      }
  },
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
.btn-eventu {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: $alpha;
    padding: 1% 2%;
    border-radius: 6px;
    color: #333333;
    border: none;
}

$alpha: #FFFF00; // Primary color */
$alpha-100: #FFFF39;
$alpha-200: #FFFF64;
$complementary: #1144AA; // Complementary color
$complementary-200: #577AC0;
$complementary200: #082867;
$danger: #FF0D00;
.h1-font {
    font-family: Futura;
    font-weight: bold;
}

.h2-font {
    font-family: Futura;
    font-weight: normal;
}

.h3-font {
    font-family: Bw Modelica;
    font-style: Bold;
    font-weight: 500;
}

.h4-font {
    font-family: Bw Modelica;
    font-weight: Bold;
}

.h5-font {
    font-family: Bw Modelica;
    font-style: semi-bold;
    font-weight: 300;
}

.h6-font {
    font-family: Bw Modelica;
    font-style: Bold;
    font-weight: 300;
}

.body-font {
    font-family: Bw Modelica;
    font-style: normal;
    font-weight: normal;
}

.btn-hover-interaction {
    // Starting wht micro-interactions
    /** Icons Classes **/
    /** -- Open Iconic and Font Awesome -- **/
    .btn-iconed [class~=fas] {
        opacity: 0;
        -webkit-transform-origin: left right;
        transform-origin: left right;
        -webkit-transform: translateX(-10px) scale(1.25);
        transform: translateX(-10px) scale(1.25);
        transition: .15s ease-out;
    }
    /** Span Class **/
    .btn-iconed [class=spn] {
        position: relative;
        left: -9px;
        transform-origin: left right;
        transform-origin: left right;
        transform: translateX(-9px);
        transform: translateX(-9px);
        transition: .20s ease-in-out;
    }
    .btn-iconed:hover [class~=fas] {
        opacity: 1;
        transform: translateX(0px) scale(0.75);
        transform: translateX(0px) scale(0.75);
    }
    /** -- Span on Hover properties -- **/
    .btn-iconed:hover [class=spn] {
        left: 0px;
    }
}
</style>

