<template>
  <div class="card" @click="setActiveNeed">
    <div class="need-icon animated fadeInLeft">
      <i class="fas fa-angle-right" />
    </div>
    <div class="card-body">
      <h5 v-if="service" class="card-title">{{ service.name }}</h5>
      <p class="card-text">{{ description }}</p>

      <div class="ctas-needs" v-if="this.$route.path !== '/app/organizador/nuevo-evento'">
        <cta-organizers
          v-if="this.$route.path.includes('organizador')"
          :quotation="quotation"
          :need="_id"
          @click="setActiveNeed"
        />
        <cta-provider :_id="_id" :quotation="quotation" v-else @click="setActiveNeed" />
      </div>
    </div>
  </div>
</template>

<script>
import CtaOrganizers from '@/components/ui/utilities/CtaOrganizers.vue';
import CtaProvider from '@/components/ui/utilities/CtaProvider.vue';
import { mapState } from 'vuex';

const stringDefault = {
  type: String,
  required: true,
  default: '',
};
export default {
  name: 'EventNeed',

  props: {
    _id: stringDefault,
    description: stringDefault,
    service: Object,
    quotation: Array,
  },

  components: {
    CtaOrganizers,
    CtaProvider,
  },

  methods: {
    setActiveNeed() {
      this.$store.commit('needs/SET_ACTIVE_NEED', {
        _id: this._id,
        description: this.description,
        service: this.service,
        quotation: this.quotation,
      });
      this.$store.commit('quotations/SET_NEED_ID', this._id);
    },
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
