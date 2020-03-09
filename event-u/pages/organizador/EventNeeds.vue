<template>
  <div>
    <div class="title ">
      <h1>
         {{activeEvent.name}} 
      </h1>
    </div>
<div class="row needs-row mt-3">
  <div
   class="col-sm-5 mt-3"
    v-for="(need,i) in needs"
    :key="i"
   >
    <event-need
    v-bind="need"
    class='mt-3'
    />
  </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import EventNeed from '@/components/ui/EventNeed.vue'

export default {
    name:'EventNeeds',
    components:{
        EventNeed
    },
     data() {
        return{
            name:'Necesides evento',
            needs:[
                 {
                _id:'12178327123718',
                description:'Necesito comprar 3 lotes de cerveza, al tiempo y de preferencia de Grupo Modelo',
                service:{
                    name:'Cerveza (Mayoreo) 🍺',
                    description:'Cerveza en mayoreo',
                    measurmentUnit:'Litros',
                    category:{
                        name:'Bebidas'
                    }
                },
                quotation:['1','2','3','4','5'],
                },
                 {
                _id:'34532323',
                description:'Necesitamos tres mesas largas tipo banquete, para poder poner platillos. No incluir manteles ni accesorios',
                service:{
                    name:'Mesas Largas🍱',
                    description:'Mesas tipo banquetes',
                    measurmentUnit:'Mesas',
                    category:{
                        name:'Mobiliario'
                    }
                },
                quotation:[],
                },
                 {
                _id:'23903290329032',
                description:'El evento será en un jardín, así que únicamente necesitamos sillas resistentes y que no importe si se manchan.',
                service:{
                    name:'Sillas de exterior 🪑',
                    description:'Sillas que resistan el exterior',
                    measurmentUnit:'Sillas',
                    category:{
                        name:'Mobiliario'
                    }
                },
                quotation:['1','2','3'],
                },
                 {
                _id:'23903290329032',
                description:'El evento será en un jardín, así que únicamente necesitamos sillas resistentes y que no importe si se manchan.',
                service:{
                    name:'Sillas de exterior 🪑',
                    description:'Sillas que resistan el exterior',
                    measurmentUnit:'Sillas',
                    category:{
                        name:'Mobiliario'
                    }
                },
                quotation:['1','2','3'],
                },
                ]
        }
    },
    computed: mapState({
        activeEvent:state=> state.event.activeEvent
    })
    ,
    mounted () {
       this.$store.commit('change',this.name)
  }
}
</script>

<style lang="scss" scoped>
.row{
    margin:0;
}
h1{
    @extend .h2-font;
    font-size:3em;
    text-align:center;
}

.needs-row{
    justify-content: center;
}

</style>