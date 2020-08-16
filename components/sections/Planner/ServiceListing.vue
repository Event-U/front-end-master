<template>
  <div class="row justify-content-center mt-4">
    <div
      class="animated fadeIn col-12 col-md-3 mb-4"
      v-for="(service, serviceIndex) in services"
      :key="serviceIndex"
    >
      <div class="card">
        <div class="card-body d-flex justify-content-between align-items-center">
          <h5>{{service.name}}</h5>
          <nuxt-link :to="`/app/planificador/tablero/servicio/${service._id}`">
            <i class="fas fa-external-link-alt"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ServiceListing',

  async mounted() {
    if (!this.$store.state.services.services) {
      await this.$store.dispatch('services/fetchServices');
    }
  },

  computed: {
    ...mapState({
      services: (state) => state.services.services,
    }),
  },
};
</script>

<style lang="scss" scoped>
:link {
  color: white;
}
i {
  color: $complementary;
}
</style>