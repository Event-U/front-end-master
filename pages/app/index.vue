<template>
  <div class="container-fluid text-center">
    <h1 class="welcome mt-4">Bienvenido a Event-u</h1>
    <h2 class="mb-4">Encuentra al proveedor ideal para tu evento</h2>
    <div
      class="row justify-content-lg-between justify-content-center d-flex text-center m-0 m-lg-5"
    >
      <div
        style=" background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%, #000000 100%), url(/banner-1.png);"
        class="animated fadeInDown mb-5 banner-index"
      >
        <h1>
          50% de descuento en
          banquetes familiares
          👪
        </h1>
        <button class="btn btn-eventu faster animated fadeInUp">
          <nuxt-link to="/app/organizador/mis-eventos">Ir ahora</nuxt-link>
        </button>
      </div>
      <div
        style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%, #000000 100%), url(/banner-2.png);"
        class="banner-index slower animated fadeInUp"
      >
        <h2>
          2x1
          Bartenders
        </h2>
        <button class="btn btn-eventu faster animated fadeInUp">
          <nuxt-link to="/app/organizador/mis-eventos">Ir ahora</nuxt-link>
        </button>
      </div>
      <div
        style=" background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%, #000000 100%), url(/banner-3.png);"
        class="animated fadeInUp slower banner-index mt-5 m-lg-0"
      >
        <h2>-10% bandas de rock</h2>
        <button class="btn btn-eventu faster animated fadeInUp">
          <nuxt-link to="/app/organizador/mis-eventos">Ir ahora</nuxt-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Inicio',

  created() {
    this.$store.commit('change', '¡Comencemos!');
  },

  computed: {
    ...mapState(['activeUser']),
  },

  head() {
    return {
      title: 'Inicio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Comienza a utilizar Event-U y no pierdas la oportunidad de posicionarte en el mejor mercado de eventos',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.banner-index {
  :link {
    color: #333;
  }

  border-radius: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s ease-in-out;
  background-position: center;
  flex-flow: column;
  color: white;
  display: flex;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  justify-content: center;
  height: 336px;

  h1,
  h2 {
    max-width: 10em;
    margin: 0.5em;
  }

  h1 {
    @extend .h2-font;
  }

  h2 {
    @extend .h2-font;
  }

  .btn-eventu {
    display: none;
    transition: 5s ease-in-out;
  }

  &:nth-of-type(1) {
    flex-basis: 100%;
    @media screen and (min-width: 800px) {
      flex-basis: 100%;
    }
    &:hover {
      .btn-eventu {
        display: block;
      }
    }
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    flex-basis: 100%;
    height: 230px;

    h2 {
      max-width: 6em;
    }

    &:hover {
      .btn-eventu {
        display: block;
      }
    }

    @media screen and (min-width: 800px) {
      flex-basis: 48%;
      height: 336px;
    }
  }
}

.welcome {
  @extend .h1-font;
}

@font-face {
  font-family: 'futura';
  src: url('~@/assets/fonts/futura-bold-03-webfont.woff2') format('woff2'),
    url('~@/assets/fonts/futura-bold-03-webfont.woff') format('woff');
  font-weight: normal;
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
  src: url('~@/assets/fonts/bwmodelica-bolditalic-webfont.woff2')
      format('woff2'),
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
  src: url('~@/assets/fonts/bwmodelica-extrabolditalic-webfont.woff2')
      format('woff2'),
    url('~@/assets/fonts/bwmodelica-extrabolditalic-webfont.woff')
      format('woff');
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
