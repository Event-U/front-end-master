<template>
  <div class="container-fluid p-0 m-0 pt-3 pt-lg-5">
    <div class="overflow-auto mt-5">
      <quotation-list />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import QuotationList from '@/components/sections/QuotationList.vue';

export default {
  name: 'AllQuotationsOrganizador',

  data() {
    return {
      name: 'Mis Cotizaciones',
    };
  },

  components: {
    QuotationList,
  },

  mounted() {
    this.$store.commit('change', this.name);
  },

  async fetch({ store }) {
    await store.dispatch('quotations/fetchQuotation');
  },

  head() {
    return {
      title: 'Mis cotizaciones',
      meta: [
        { 'og:title': 'Organiza las cotizaciones de tus eventos en México' },
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
</style>
