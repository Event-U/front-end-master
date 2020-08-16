<template>
  <div class="cta-organizadores">
    <a class="inactive" v-if="quotation.length === 0">No tienes cotizaciones</a>
    <div class="cta animated fadeInUp">
      <nuxt-link
        :to="`/app/organizador/evento/${eventId}/necesidad/${need}/cotizaciones`"
        class="cta-needs"
        v-if="quotation.length !== 0"
      >Ver cotizaciones</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'CtaOrganizers',
  props: {
    quotation: Array,
    need: String,
  },

  computed: {
    ...mapState({
      eventId: (state) => state.events.activeEvent._id,
    }),
  },
};
</script>

<style lang="scss" scoped>
.green-label {
  color: green;
}
.complementary-label {
  color: $complementary;
}
.inactive {
  color: $danger;
}
.inactive:hover::after {
  content: ':(';
  transition: 1s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  color: $danger;
}
.cta-needs {
  color: $complementary;
}
.card {
  flex-direction: inherit;
  border: none;
}
.need-icon {
  padding-right: 25px;
}
.card-body {
  padding: 0;
}
i {
  background-color: #ffff00;
  padding: 40% 80%;
  border-radius: 50%;
}
</style>
