<template>
  <div>
    <div class="title mt-3 animated fadeInUp">
      <h4>{{ activeNeed.service.name }}</h4>
      <h6>{{ activeNeed.description }}</h6>
    </div>
    <div class="row needs-row mt-3">
      <div
        class="col-sm-5 mt-3 quotation-container animated fadeInDown"
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
      name: 'Cotizaciones de necesidad',
    };
  },

  computed: {
    ...mapState({
      activeNeed: (state) => state.needs.activeNeed,

      quotations: (state) => state.needs.activeNeed.quotations,
    }),
  },

  async fetch() {
    if (!this.$store.state.events.activeEvent) {
      await this.$store.dispatch(
        'events/findEvent',
        this.$route.params.eventId
      );
      await this.$store.dispatch('needs/findNeed', this.$route.params.needId);
    }

    this.$store.commit('change', this.name);
  },

  head() {
    return {
      title: 'Cotizaciones necesidad',
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
.quotation-container:nth-of-type(n) {
  border-left: 0.5px solid #cccccc;
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
