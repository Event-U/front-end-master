<template>
  <div class="card">
    <div class="card-body">
      <div
        class="img-bg"
        :style="`background-image: url(${image}); background-repeat: no-repeat; background-size:cover;`"
      />
      <h5 class="card-title">{{ name }}</h5>
      <Raitings v-bind="number" />
      <p class="card-text">{{ description }}</p>

      <p class="card-text text-left">
        <small class="text-muted">${{ unitPrice }}</small>
      </p>
      <button class="btn btn-eventu" @click="goToBoard">Ir al tablero</button>
    </div>
    <div class="card-footer text-left">
      <small class="category">{{ category.name }}</small>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Raitings from '@/components/ui/utilities/Raitings.vue';

export default {
  name: 'ServiceCard',

  components: {
    Raitings,
  },

  props: {
    _id: String,
    description: String,
    measurementUnit: String,
    unitPrice: Number,
    image: String,
    name: String,
    category: Object,
    number: Number,
  },

  methods: {
    async goToBoard() {
      await this.$store.dispatch('board/getServiceBoard', this._id);

      this.$router.push({
        name: 'app-planificador-tablero-servicio-id',
        params: { id: this._id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.img-bg {
  padding: 4em 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.card {
  min-height: 100%;
}
button {
  background-color: $complementary;
  color: white;
  @extend .h3-font;
  padding: 2% 5%;
}
h5 {
  @extend .h2-font;
  font-weight: 400;
}
p {
  @extend .body-font;
}
small {
  @extend .h3-font;
}
.category {
  background-color: $alpha;
  border-radius: 8px 5px 0px 5px;
  padding: 1% 5%;
  color: #333;
}
</style>
