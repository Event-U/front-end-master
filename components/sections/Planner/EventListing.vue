<template>
  <div class="row justify-content-center mt-4 align-items-stretch">
    <div
      class="animated fadeIn col-12 col-md-3 mb-4"
      v-for="(event, eventIndex) in events"
      :key="eventIndex"
    >
      <div
        class="card"
        :style="`background-image: linear-gradient(90deg, rgba(0,0,0,0.3393732492997199) 0%, rgba(0,0,0,0.16850490196078427) 100%), url('${event.image}'); background-size:fit; background-position: top center;`"
      >
        <!-- <div class="card-header">
          <h6>{{event.name}}</h6>
        </div>-->
        <div class="card-body align-items-center d-flex justify-content-between">
          <h5>
            {{event.name}}
            <small class="d-block">{{event.date | fromNow}}</small>
          </h5>

          <nuxt-link :to="`/app/planificador/tablero/evento/${event._id}`">
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
.card {
  height: 100%;
  color: white;
  transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s;
  &:hover {
    background: #ffff00 !important;
    color: #333;
    transition: all ease-in-out 0.4s;
    //filter: hue-rotate(50deg);
  }
}
small {
  font-size: calc(var(--base-font-size) * 0.45);
}
i {
  color: $complementary;
  font-size: 130%;
}
.badge {
  background-color: red;
}
:link {
  color: white;
}
</style>