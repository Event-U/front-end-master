<template>
  <div class="container-fluid d-flex flex-column mt-4 mt-lg-5">
    <h1 class="text-center">¡Entra a tus tableros!</h1>
    <h3 class="text-center">Administra tus eventos o servicios</h3>
    <div class="row justify-content-center text-center mt-3 mb-3">
      <button
        @click="activeService= 'services'"
        :class="[activeService ==='services' ? 'btn-eventu' : 'non-active']"
        class="btn mr-3"
      >Ver mis servicios</button>
      <button
        @click="activeService= 'events'"
        :class="[activeService ==='events'? 'btn-eventu' : 'non-active' ]"
        class="btn"
      >Ver mis eventos</button>
    </div>

    <event-listing v-if="activeService==='events'" />
    <service-listing v-if="activeService=== 'services'" />
  </div>
</template>

<script>
export default {
  name: 'PlannerBoards',

  components: {
    EventListing: () => import('@/components/sections/Planner/EventListing'),
    ServiceListing: () =>
      import('@/components/sections/Planner/ServiceListing'),
  },

  created() {
    this.$store.commit('change', 'Planificador');
  },

  data() {
    return {
      activeService: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  @extend .h3-font;
  @extend .btn-eventu;
  font-size: 1em;
  transition: 0.3s ease-out;
}

.non-active {
  box-shadow: none;
}

h1 {
  @extend .h1-font;
}
h3 {
  @extend .h2-font;
}
</style>
