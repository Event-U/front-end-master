<template>
  <div>
    <div class="title mt-3">
      <h1>{{ activeEvent.name }}</h1>
    </div>
    <div class="row needs-row mt-3">
      <div
        class="col-sm-5 mt-3 need-container"
        v-for="(need, indexNeed) in activeEvent.needs"
        :key="indexNeed"
      >
        <event-need v-bind="need" class="mt-3 need-card mb-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventNeed from '@/components/ui/cards/EventNeed.vue';

export default {
  name: 'EventNeedsProvider',

  components: {
    EventNeed,
    NewNeedForm: () =>
      import(
        /* webpackChunkName: "NewNeedForm" */ '@/components/sections/forms/NewNeedForm.vue'
      ),
  },

  data() {
    return {
      addingNeed: false,
      name: 'Necesidades evento',
    };
  },

  created() {
    this.$store.commit('change', this.name);
  },

  async fetch() {
    if (!this.activeEvent) {
      await this.$store.dispatch('events/findEvent', this.$route.params.id);
    }
  },

  computed: mapState({
    activeEvent: (state) => state.events.activeEvent,
  }),

  methods: {
    actionNewNeed(e) {
      this.addingNeed = true;
    },
  },

  head() {
    return {
      title: 'Necesidades evento',
      meta: [
        { 'og:title': 'Necesidades evento Event-u' },
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
.new-need-container {
  text-align: center;
  @extend .btn-hover-interaction;
}
.btn {
  padding: 1% 2%;
  border-radius: 8px;
  border: 1.5px solid #333333;
  @extend .h3-font;
  font-size: 1.5em;
  text-align: center;
  transition: 0.3s ease-out;
}
.btn:hover {
  @extend .btn-eventu;
  transition: 0.7s cubic-bezier(0.77, 0, 0.175, 1);
}
.need-container:nth-of-type(2n) {
  border-left: 1px solid #cccccc;
}
.need-container {
  border-bottom: 1px solid #cccccc;
  transition: 0.3s ease-out;
}
.need-container:hover {
  border: 1px solid #cccccc;
  transition: 0.3s ease-in;
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
}

.row {
  margin: 0;
}
h1 {
  @extend .h2-font;
  font-size: 3em;
  text-align: center;
}

.needs-row {
  justify-content: center;
}
</style>
