<template>
  <div class="list-services-content">
    <div class="row">
      <div class="col-md-3 col-lg-4 col-12" v-for="(event, i) in events" :key="i">
        <event-card v-bind="event" />
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/lib/api';
import EventCard from '@/components/ui/cards/EventCard.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'MyEvents',

  components: {
    EventCard,
  },

  data() {
    return {
      name: 'Mis eventos',
    };
  },

  head() {
    return {
      title: 'Mis eventos',

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

  created() {
    this.$store.commit('change', this.name);
  },

  async fetch({ store }) {
    if (!store.state.events.events) {
      await store.dispatch('events/fetchEvents');
    }
  },

  computed: mapState('events', ['events']),
};
</script>

<style lang="scss" scoped>
.row {
  margin: 0;
}
h5 {
  color: white !important;
  font-size: 2em;
  font-weight: 100;
}

.list-services-content {
  margin-top: 3%;
  transition: ease-out 0.8s;
}

.list-services-content .card-text {
  color: #333333;
  font-weight: normal !important;
  font-size: 0.8em;
}

.list-services-content .card:hover {
  border: solid #ffff00 0.5px;
  transition: ease-in 0.8s;
}

.list-services {
  font-size: 2em;
  color: black;
}
</style>
