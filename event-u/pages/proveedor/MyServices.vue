<template>
<div class="mt-3">
    <div class="mt-3 mb-3 cta-new-service d-flex justify-content-center">
        <button 
            class="btn btn-iconed cta-service"
            data-toggle="modal" 
            data-target="#ServiceForm"
        >
            <i class="fas fa-arrow-alt-circle-up"/>
            Agregar servicio
        </button>
    <div class="modal fade" id="ServiceForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="ariaHidden">
        <div class="modal-dialog" role="document">
            <div class="modal-content m-3 p3">
                <new-service-form
                />
                <button 
                    type="button" 
                    class="btn btn-danger mb-3" 
                    data-dismiss="modal"
                >
                    Cerrar formulario
                </button>
            </div>
        </div>
    </div>
    </div>
    <div class="service-row row">
        <div 
            class="col-md-2"
            v-for="service in services"
            :key="service._id"
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
import NewServiceForm from '@/components/sections/NewServiceForm.vue'
import {mapState} from 'vuex'

export default {
    name:'MyServices',
    components:{
        ServiceCard,
        NewServiceForm
    }, 
    data(){
        return{
            name:'Mis servicios',
        }
    },
     created() {
        this.$store.commit('change', this.name)
        this.$store.dispatch('service/fetchCategories')
        this.$store.dispatch('service/fetchServices')
  },
  computed:mapState('service',['services'])
}
</script>

<style lang='scss' scoped>
.row{
    margin:0;
}
.cta-service{
    @extend .btn-eventu;
    font-weight: 400;
    font-size:1.2em;
    text-align:center;
    align-self:center;
    transition:.3s ease-in-out;
}
.btn-danger{
    @extend .h2-font;
    font-weight: 400;
    font-size:1.2em;
    text-align:center;
    align-self:center;
    transition:.4s ease-in-out;
}
.btn:hover{
    box-shadow:5px 3px 11px #00000059;
    transition:.4s ease-in;
    font-size:1.3em;
}
</style>