<template>
  <div class="card">
    <div
      class="img-bg"
      :style="
				`background-image: url(${image}); background-repeat: no-repeat; background-size:cover;`
			"
    />
    <div class="card-body d-flex flex-column text-lg-left justify-content-between">
      <div>
        <h4 class="card-title">{{ name }}</h4>
        <small class="category mb-4">{{ category.name }}</small>
        <p class="card-text">{{ description }}</p>
        <small>
          <strong>${{ unitPrice }}</strong>
          p/{{measurementUnit}}
        </small>
      </div>
      <div class="cta-service">
        <button class="btn btn-eventu" @click="goToBoard">Ir al tablero</button>
      </div>
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
.btn {
  background-color: $complementary;
  color: white;
  font-size: 0.8em;
}
.img-bg {
  padding: 4em 0;
  background-repeat: no-repeat;
  border-radius: 16px 16px 0 0;
  background-size: cover;
  background-position: center;
}
.card {
  min-height: 100%;
  border-radius: 16px;
}

h4 {
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
