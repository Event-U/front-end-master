<template>
  <form class="text-center">
    <h3 class="text-center">{{ serviceName.name }}</h3>
    <p>{{activeNeed.description}}</p>
    <div class="form-group">
      <label for="newServiceName">Precio de tu cotización</label>
      <div class="input-group-prepend">
        <div class="input-group-text">$</div>
        <input class="form-control" aria-describedby="emailHelp" v-model="newQuotationObject.price" />
      </div>
    </div>
    <div class="form-group">
      <label for="validationTextarea">Descripción de tu cotización</label>
      <textarea
        class="form-control"
        id="validationTextarea"
        required
        v-model="newQuotationObject.description"
      />
    </div>
    <div class="form-group">
      <label for="quotation-image">Sube tu imagen</label>
      <input
        type="text"
        class="form-control"
        id="quotation-image"
        v-model="newQuotationObject.image"
      />
    </div>
    <button
      class="btn btn-primary mb-3 btn-lg btn-block"
      @click.prevent="postQuotation(newQuotationObject)"
    >Subir Cotización</button>
  </form>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import api from '@/lib/api.js';

export default {
  name: 'NewQuotationForm',

  data() {
    return {
      newQuotationObject: {
        price: 0,
        description: '',
        image: '',
      },
    };
  },

  props: {
    userid: String,
    need: Object,
  },

  mounted() {
    this.$store.dispatch('services/getNameService', this.service);
  },

  computed: {
    ...mapState({
      activeNeed: (state) => state.needs.activeNeed,

      serviceName: (state) => state.needs.activeNeed.service,

      activeUser: (state) => state.activeUser,
    }),
  },

  methods: {
    postQuotation({ price, description, image }) {
      this.$store.dispatch('quotations/postQuotation', {
        provider: this.activeUser,
        price: price,
        description: description,
        image: image,
        need: this.activeNeed._id,
        status: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  @extend .h4-font;
}
h3 {
  @extend .h2-font;
  font-size: 2em;
}
.btn-primary {
  @extend .h3-font;
  font-size: 1em;
  background-color: $complementary;
  // padding: 2% 37%;
}
</style>
