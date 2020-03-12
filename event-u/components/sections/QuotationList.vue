<template>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">{{this.$route.path==='/organizador/allquotations' ? 'Evento' : 'Categoría'}}</th>
      <th scope="col">{{this.$route.path==='/organizador/allquotations' ? 'Necesidad' : 'Servicio'}}</th>
      <th scope="col">{{this.$route.path==='/organizador/allquotations' ? 'Proveedor' : 'Descripción'}}</th>
      <th scope="col">{{this.$route.path==='/organizador/allquotations' ? 'Precio' : 'Estado'}}</th>
      <th v-if="this.$route.path==='/organizador/allquotations'" scope="col"></th>
      <th v-if="this.$route.path==='/organizador/allquotations'" scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <quotation-list-row
      v-for="(quotation,i) in quotations"
      v-bind="quotation"
      :key='i'
    />
  </tbody>
</table>
</template>

<script>
import QuotationListRow from '@/components/ui/QuotationListRow.vue'

export default {
    name:'QuotationList',
    components:{
        QuotationListRow
    },
    data(){
      return{
        quotations:[
          {
            _id:'ch',
            provider:{
              businessName:'Chuchito Perez'
            },
            date:'25 de abril',
            price:1243,
            description:'Te ofrezco 5 sillas al precio de una GGG',
            images:'https://www.jjslist.com/blog/wp-content/uploads/2015/09/cocktail-tables.jpg',
            need:{
              _id:'need_id',
              description:'Necesito una mesa tipo billar',
              service:{
                name:'Mesas de Billar',
                category:'Inmobiliario'
              }
            },
            state:1,
            event:{
              name:'El Mejor Evento del planeta Tierra',
              description:'Vamos a hacer un súper evento'
            }
          },
          {
            _id:'33333333',
            provider:{
              businessName:'Perez'
            },
            price:12435,
            description:'Te ofrezco 5 sillas al precio de una GGG',
            images:['https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/2018_Rental_Trends_Bright_Zialena-1_1.jpg',],
            need:{
              _id:'need_id',
              description:'Necesito una mesa tipo billar',
              service:{
                name:'Mesas de Billar',
                category:'Inmobiliario'
              },
            },
              date:'25 de abril',
            state:2,
            event:{
              name:'El Mejor Evento del planeta Tierra',
              description:'Vamos a hacer un súper evento'
            }
          },
          {
            _id:'00000',
            provider:{
              businessName:'Chuchito asa'
            },
            date:'25 de abril',
            price:19999,
            description:'Te ofrezco 5 mesas al precio de una GGG',
            images:['https://farmandtablenm.com/wp-content/uploads/2020/01/Ex-novo-dinner-2019-table.jpg',],
            need:{
              _id:'need_id',
              description:'Necesito una mesa tipo billar',
              service:{
                name:'Algo diferente',
                category:'Inmobiliario'
              }
            },
            state:3,
            event:{
              name:'Un bicho',
              description:'Vamos a hacer un súper bicho'
            }
          },
          
        ]
      }
    }
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