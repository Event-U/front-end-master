<template>
  <div class="row justify-content-center mt-4">
    <div
      class="animated fadeIn col-12 col-md-3 mb-4"
      v-for="(service, serviceIndex) in services"
      :key="serviceIndex"
    >
      <div class="card">
        <div class="card-header">
          <h6>{{service.category.name}}</h6>
        </div>
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
.card {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.07);
  transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.7s;
  &:hover {
    transition: all ease-in-out 0.4s;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2), 0px 0px 25px #ffff0026;
  }
}
</style>