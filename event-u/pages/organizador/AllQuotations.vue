<template>
  <div>
      <quotation-list/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import QuotationList from '@/components/sections/QuotationList.vue'

export default {
    name:'AllQuotations',
    components:{
        QuotationList,
    },
    data(){
        return{
            name:'Mis Cotizaciones'
        }
    },
    mounted(){
     this.$store.commit('change',this.name)
    }
}
</script>

<style>

</style>