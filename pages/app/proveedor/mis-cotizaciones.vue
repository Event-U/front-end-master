<template>
  <div>
    <quotation-list />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import QuotationList from '@/components/sections/QuotationList.vue';

export default {
  name: 'AllQuotationsProvider',

  components: {
    QuotationList,
  },

  mounted() {
    this.$store.commit('change', this.name);
  },

  async fetch({ store }) {
    await store.dispatch('quotations/fetchQuotation');
  },

  data() {
    return {
      addingNeed: false,
      name: 'Mis cotizaciones',
    };
  },

  computed: mapState({
    activeEvent: (state) => state.events.activeEvent,
  }),

  head() {
    return {
      title: 'Todas mis cotizaciones',
      meta: [
        { 'og:title': 'Sitio web para organizar eventos en México' },
        { 'og:type': 'page' },
        {
          'og:description':
            'Comienza a generar ganancias en el mercado de eventos en México. No importa sí eres organizador, proveedor o inversionista.',
        },
        { 'og:image': '../assets/landing/images/dashboard.png' },
        {
          hid: 'description',
          name: 'description',
          content: 'La plataforma #1 para organizar eventos en México',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @extend .h2-font;
  font-size: 3em;
  text-align: center;
}
h4 {
  @extend .h5-font;
  text-align: center;
}
</style>
