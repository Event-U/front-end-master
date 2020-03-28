<template>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">
          {{this.$route.path==='/organizador/allquotations' ? 'Necesidad' : 'Categoría'}}
      </th>
      <th scope="col">
        {{this.$route.path==='/organizador/allquotations' ? 'Cotización' : 'Servicio'}}
      </th>
      <th scope="col">
          {{this.$route.path==='/organizador/allquotations' ? 'Proveedor' : 'Descripción'}}
      </th>
      <th scope="col">
          {{this.$route.path==='/organizador/allquotations' ? 'Precio' : 'Estado'}}
        </th>
      <th v-if="this.$route.path==='/organizador/allquotations'" scope="col"></th>
      <th v-if="this.$route.path==='/organizador/allquotations'" scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <quotation-list-row
      v-for="quotation in quotations"
      v-bind="quotation"
      :key='quotation._id'
    />
  </tbody>
</table>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import QuotationListRow from '@/components/ui/QuotationListRow.vue'

export default {
    name:'QuotationList',
    components:{
        QuotationListRow
    },
    data(){
      return{
      }
    },
    created() {
      this.$store.dispatch('quotation/fetchQuotation')
    },
    computed:mapState('quotation',['quotations'])
}
</script>

<style lang='scss' scoped>
tbody{
  @extend .h4-font;
}
th{
  @extend .h2-font;
}
thead{
  background-color:#3333!important;
  border-radius:8px!important;
}
</style>