<template>
  <div class="error500 row">
    <div class="col-lg-8 col-12 align-center">
      <img src="@/assets/error/SVG/500.svg" alt />
    </div>
    <div class="animated fadeInDown col-lg-4 col-12 mt-3 text-center text-lg-left">
      <h1>
        Estamos pasando por alguna dificultad técnica. ¿Por qué no visitar otra
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
  name: 'error500',

  data() {
    return {
      name: 'Error 500 🤔',
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
  font-size: 2em;
}
h1 {
  @extend .h3-font;
  font-weight: 500;
  font-size: 1.8em;
}
.error500 {
  justify-content: center;
  align-items: center;
}
</style>
