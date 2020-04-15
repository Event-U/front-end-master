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
    head () {
      return {
          title: 'Mis cotizaciones', 
          meta: [
            {'og:title': 'Organiza las cotizaciones de tus eventos en México'},
            {'og:type': 'page'},
            {'og:description': 'Comienza a generar ganancias en el mercado de eventos en México. No importa sí eres organizador, proveedor o inversionista.'},
            {'og:image': '../assets/landing/images/dashboard.png'},
             {
                  hid: 'description',
                  name: 'description',
                  content: 'La plataforma #1 para organizar eventos en México'
              }
          ]
      }
  },
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