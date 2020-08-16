<template>
  <div class="container-fluid">
    <div class="title mt-3">
      <h1>{{ activeEvent.name }}</h1>
    </div>
    <div class="row needs-row m-0">
      <div
        class="col-12 col-lg-3 mt-3 need-container"
        v-for="(need, indexNeed) in activeEvent.needs"
        :key="indexNeed"
      >
        <event-need v-bind="need" class="mt-3 need-card mb-3" />
      </div>
    </div>
    <div class="col mt-4 new-need-container">
      <button
        v-if="addingNeed !== true"
        s
        @click="actionNewNeed"
        class="btn btn-iconed btn-border mt-3"
        role="button"
      >
        <i class="fas fa-plus"></i>
        <span class="spn">Agregar necesidades</span>
      </button>
      <new-need-form v-if="addingNeed" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventNeed from '@/components/ui/cards/EventNeed.vue';

export default {
  name: 'EventNeedsOrganizador',

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

  async fetch({ store, params }) {
    if (!store.state.events.activeEvent) {
      await store.dispatch('events/findEvent', params.eventId);
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
      title: `Necesidades ${this.activeEvent.name}`,
      meta: [
        { 'og:title': `Necesidades para el evento ${this.activeEvent.name}` },
        { 'og:type': 'page' },
        {
          'og:description': `Conoce las necesidades que tiene el evento ${this.activeEvent.name}`,
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

.container-fluid {
  min-height: 100vh;
}

.btn {
  padding: 1% 2%;
  font-size: 1.5em;
  transition: 0.3s ease-out;
}

.btn:hover {
  transition: 0.7s cubic-bezier(0.77, 0, 0.175, 1);
}

@media (min-width: 800px) {
  .need-container:nth-of-type(2n) {
    border-left: 1px solid #cccccc;
  }
}

.need-container {
  border-bottom: 1px solid;
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
