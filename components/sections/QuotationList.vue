<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          {{
          isOrganizador
          ? 'Necesidad'
          : 'Categoría'
          }}
        </th>
        <th scope="col">
          {{
          isOrganizador
          ? 'Cotización'
          : 'Servicio'
          }}
        </th>
        <th scope="col">
          {{
          isOrganizador
          ? 'Proveedor'
          : 'Descripción'
          }}
        </th>
        <th scope="col">
          {{
          isOrganizador
          ? 'Precio'
          : 'Estado'
          }}
        </th>
        <th v-if="isOrganizador" scope="col"></th>
        <th v-if="isOrganizador" scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <quotation-list-row
        v-for="quotation in quotations"
        v-bind="quotation"
        :isOrganizador="isOrganizador"
        :key="quotation._id"
      />
    </tbody>
  </table>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import QuotationListRow from '@/components/ui/QuotationListRow.vue';

export default {
  name: 'QuotationList',

  components: {
    QuotationListRow,
  },

  created() {
    this.$store.dispatch('quotations/fetchQuotation');
  },

  computed: {
    isOrganizador() {
      return this.$route.path.includes('organizador');
    },

    ...mapState('quotations', ['quotations']),
  },
};
</script>

<style lang="scss" scoped>
tbody {
  @extend .h4-font;
}
th {
  @extend .h2-font;
}
thead {
  background-color: #3333 !important;
  border-radius: 8px !important;
}
</style>
