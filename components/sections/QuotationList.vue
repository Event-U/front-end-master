<template>
  <table class="table text-center">
    <thead class="table-head">
      <tr>
        <th scope="col ">{{ isOrganizador ? 'Necesidad' : 'Categoría' }}</th>
        <th scope="col">{{ isOrganizador ? 'Cotización' : 'Servicio' }}</th>
        <th scope="col" class="d-lg-block d-none">{{ isOrganizador ? 'Proveedor' : 'Descripción' }}</th>
        <th scope="col">{{ isOrganizador ? 'Precio' : 'Estado' }}</th>
        <th v-if="isOrganizador" scope="col"></th>
        <th v-if="isOrganizador" scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <quotation-list-row
        v-for="quotation in quotations"
        v-bind="[isOrganizador ? quotation : quotation]"
        :isOrganizador="isOrganizador"
        :key="quotation._id"
      />
    </tbody>
  </table>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex';
import QuotationListRow from '@/components/ui/QuotationListRow.vue';

export default {
  name: 'QuotationList',

  components: {
    QuotationListRow,
  },

  computed: {
    isOrganizador() {
      return this.$route.path.includes('organizador');
    },

    ...mapState({
      allQuotations: (state) => state.quotations.quotations,
    }),

    ...mapGetters({
      quotations: 'quotations/awaredQuotations',
    }),
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
  background-color: #3333;
  border-radius: 8px;
}

.table-head {
  background-color: $complementary-200;
  color: #eee;
}
</style>
