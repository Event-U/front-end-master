<template>
<div class="mt-3">
    <div class="mt-3 mb-3 cta-new-service d-flex justify-content-center">
        <button class="btn btn-iconed">
            <i class="fas fa-arrow-alt-circle-up">
            </i>
                Agregar servicio
        </button>
    </div>
    <div class="service-row row">
        <div 
            class="col-md-2"
            v-for="(service,i) in services"
            :key="i"
        >
                <service-card
                    v-bind="service"
                />
        </div>
    </div>
</div>
</template>

<script>
import ServiceCard from '@/components/ui/ServiceCard.vue'
import {mapMutations} from 'vuex'

export default {
    name:'MyServices',
    components:{
        ServiceCard,
    }, 
    data(){
        return{
            name:'Mis servicios',
            services:[
                {
                _id:'asdasdas',
                name:'Sillas brgas',
                description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                measurementUnit:'Metros',
                unitPrice:125,
                imagen:'https://i.pinimg.com/originals/1f/c4/76/1fc4767894db24a041bfca54bbeeb5a3.jpg',
                category:'Inmobiliario'
            },
                {
                _id:'asdasdas',
                name:'Sillas brgas',
                description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                measurementUnit:'Metros',
                unitPrice:125,
                imagen:'https://i.pinimg.com/originals/1f/c4/76/1fc4767894db24a041bfca54bbeeb5a3.jpg',
                category:'Inmobiliario'
            },
                {
                _id:'asdasdas',
                name:'Sillas brgas',
                description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                measurementUnit:'Metros',
                unitPrice:125,
                imagen:'https://i.pinimg.com/originals/1f/c4/76/1fc4767894db24a041bfca54bbeeb5a3.jpg',
                category:'Inmobiliario'
            },
            ]
        }
    },
    mounted () {
       this.$store.commit('change', this.name)
  }
}
</script>

<style lang='scss' scoped>
.row{
    margin:0;
}
.btn{
    @extend .btn-eventu;
    @extend .h2-font;
    font-weight: 400;
    font-size:1.2em;
    text-align:center;
    align-self:center;
    transition:.4s ease-in-out;
}
.btn:hover{
    box-shadow:5px 3px 11px #00000059;
    transition:.3s ease-in;
    font-size:1.3em;
}
.cta-new-service{
    
}
</style>