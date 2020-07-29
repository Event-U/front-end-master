<template>
  <div class="row justify-content-center mt-4">
    <div
      class="animated fadeIn col-12 col-md-3 mb-4"
      v-for="(event, eventIndex) in events"
      :key="eventIndex"
    >
      <div class="card">
        <div class="card-body align-items-center d-flex justify-content-between">
          <h5>
            {{event.name}}
            <small class="d-block">{{event.date | fromNow}}</small>
          </h5>

          <nuxt-link :to="`/app/planificador/tablero/evento/${event._id}`" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import moment from 'moment';

export default {
  name: 'EventListing',

  async mounted() {
    if (!this.$store.state.events.events) {
      await this.$store.dispatch('events/fetchEvents');
    }
  },

  filters: {
    fromNow(d) {
      return moment(d).locale('es').fromNow();
    },
  },

  computed: {
    ...mapState({
      events: (state) => state.events.events,
    }),
  },
};
</script>

<style lang="scss" scoped>
.badge {
  background-color: red;
}
:link {
  color: white;
}
</style>