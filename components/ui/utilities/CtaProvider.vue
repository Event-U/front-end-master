<template>
  <div class="cta-proveedores">
    <a
      class="complementary-label cta-pr"
      v-if="quotation.length === 0"
      data-toggle="modal"
      :data-target="`#QuotationForm${_id}`"
    >Enviar cotización</a>
    <div
      class="modal fade"
      :id="`QuotationForm${_id}`"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabels"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content p-3">
          <new-quotation-form v-if="activeNeed" />
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar formulario</button>
        </div>
      </div>
    </div>
    <a
      class="green-label cta-pr"
      v-if="quotation.length !== 0"
      data-toggle="modal"
      :data-target="`#QuotationDescription${_id}`"
    >Abrir cotización</a>
    <div
      v-if="quotation.length !== 0"
      class="modal fade"
      :id="`QuotationDescription${_id}`"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <need-quotation v-bind="quotation" />
          <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar ventana</button>
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
