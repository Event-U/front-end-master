<template>
  <div class="cta-proveedores">
    <a
      class="complementary-label cta-pr"
      v-if="quotation.length === 0 "
      data-toggle="modals"
      @click="handlingModalQuotation"
      :data-target="`#QuotationForm-${_id}`"
    >Enviar cotización</a>
    <div
      class="modals"
      @click.self="openModal = false"
      :id="`QuotationForm-${_id}`"
      v-if="openModal && !openQuotation"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content p-3">
          <new-quotation-form />
          <button
            type="button"
            class="btn btn-danger"
            @click="openModal = false"
            data-dismiss="modal"
          >Cerrar formulario</button>
        </div>
      </div>
    </div>

    <a
      class="green-label cta-pr"
      v-if="quotation.length !== 0"
      @click="openQuotation = true"
      :data-target="`#QuotationDescription${_id}`"
    >Abrir cotización</a>
    <div
      v-if="quotation.length !== 0 && openQuotation && !openModal"
      class="modals modals-quotation fade"
      :id="`QuotationDescription${_id}`"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content p-3">
          <need-quotation v-bind="quotation" />
          <button
            type="button"
            class="btn btn-danger"
            @click="openQuotation = false"
          >Cerrar cotizazión</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NewQuotationForm from '@/components/sections/forms/NewQuotationForm.vue';

export default {
  name: 'CtaProvider',

  props: {
    quotation: [Array, Object],
    _id: String,
    need: Object,
  },

  data() {
    return {
      openModal: false,
      openQuotation: false,
    };
  },

  methods: {
    handlingModalQuotation() {
      this.$store.commit('needs/SET_ACTIVE_NEED', this.need);
      this.openModal = true;
    },
  },

  components: {
    NewQuotationForm,
    NeedQuotation: () => import('@/components/ui/cards/NeedQuotation.vue'),
  },

  computed: mapState({
    activeNeed: (state) => state.needs.activeNeed,
  }),
};
</script>

<style scoped lang="scss">
.modals-quotation {
  position: absolute;
  min-width: 25em;
  margin-left: auto;
  top: 52px;
  left: -18%;
  @media screen and (min-width: 800px) {
    top: 20px;
    left: -100%;
    min-width: 45em;
  }
  margin-right: auto;
}
.modals {
  animation: fadeIn 0.8s ease-in-out forwards;
  position: absolute;
}
@keyframes fadeIn {
  from {
    opacity: 0.5;
    transform: translateY(-3em);
  }
  to {
    opacity: 1;
    transform: translateY(0em);
  }
}

.cta-pr {
  cursor: pointer;
}
.btn-danger {
  background-color: $danger;
}
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
.modal-content {
  border-radius: 8px;
  box-shadow: 7px 7px 7px 0px #ffffff4d;
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
