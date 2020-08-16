<template>
  <div class="container-fluid">
    <div class="row m-0 flex-column title mt-3 animated fadeInUp">
      <h4>{{ activeNeed.service.name }}</h4>
      <h6>{{ activeNeed.description }}</h6>
    </div>
    <div class="row needs-row mt-3 justify-content-around">
      <div
        class="col-12 col-lg-5 mt-3 quotation-container animated fadeInDown"
        v-for="(quotation, i) in activeNeed.quotation"
        :key="i"
      >
        <need-quotation v-bind="quotation" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import NeedQuotation from '@/components/ui/cards/NeedQuotation.vue';

export default {
  name: 'QuotationNeeds',

  components: {
    NeedQuotation,
  },

  data() {
    return {
      name: 'Cotizaciones ',
    };
  },

  computed: {
    ...mapState({
      activeNeed: (state) => state.needs.activeNeed,

      quotations: (state) => state.needs.activeNeed.quotations,
    }),
  },

  created() {
    this.$store.commit('change', this.name);
  },

  async fetch({ store, params }) {
    if (!store.state.events.activeEvent) {
      await store.dispatch('events/findEvent', params.eventId);
      await store.dispatch('needs/findNeed', params.needId);
    }
  },

  head() {
    return {
      title: `Cotizaciones ${this.activeNeed.description}`,
      meta: [
        {
          'og:title': `Cotizaciones para la necesidad de ${this.activeNeed.description} `,
        },
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
.title {
  text-align: center;
  h4 {
    @extend .h2-font;
    font-size: 1.5em;
  }
  h6 {
    @extend .h4-font;
    font-size: 1em;
  }
}

@media (min-width: 800px) {
  .quotation-container:nth-of-type(n) {
  }
}
.quotation-container {
  border-bottom: 0.1px solid #cccccc;
  transition: 0.3s ease-out;
  padding-bottom: 10px !important;
  padding-left: 5px;
  padding-top: 10px;
}
.quotation-container:hover {
  transition: 0.3s ease-in;
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
  border: 1px solid #cccccc;
}
.row {
  margin: 0;
}
</style>
