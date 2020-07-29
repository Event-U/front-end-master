<template>
  <div class="error400 row">
    <div class="col-lg-8 col-12 align-center">
      <img class="animated fadeInLeft" src="@/assets/error/SVG/404.svg" alt />
    </div>
    <div class="col-lg-4 col-12 mt-3 animated fadeInDown text-center text-lg-left">
      <h1>
        Mientras encontramos lo que estabas buscando , ¿por qué no visitas otra
        sección?
      </h1>
      <nuxt-link to="/app">
        <button class="mt-3 animated fadeInUp">Ir al inicio</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error400',

  data() {
    return {
      name: 'Error 404 🔍',
    };
  },

  mounted() {
    this.$store.commit('change', this.name);
  },
};
</script>

<style lang="scss" scoped>
button {
  @extend .btn-eventu;
  padding: 2% 10%;
  color: #333333;
  font-size: 2em;
  font-weight: 300;
  @extend .h1-font;
}
h1 {
  @extend .h3-font;
  font-weight: 500;
  font-size: 1.8em;
}
.error400 {
  justify-content: center;
  align-items: center;
}
</style>
