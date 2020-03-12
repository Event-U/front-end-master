<template>
<div class="card" @click="setActiveNeed">
    <div class="need-icon animated fadeInLeft">
     <i class="fas fa-angle-right"></i>
    </div>
    <div class="card-body">
        <h5 class="card-title">{{service.name}}</h5>
        <p class="card-text">{{description}}</p>
    <div 
        class="ctas-needs"
        v-if="this.$route.path!=='/organizador/NewEvent'"
    >
            <div 
                class="cta-organizadores" 
                v-if="this.$route.path==='/organizador/EventNeeds'"
            >
                    <a  
                        class="inactive"
                        v-if="quotation.length===0"
                    > 
                            No tienes cotizaciones
                    </a>
                    <div class="cta animated fadeInUp delay-1s">
                        <nuxt-link 
                            to="/organizador/QuotationNeeds" 
                            class="cta-needs animated tada"
                            v-if="quotation.length!==0"
                            > 
                                Ver cotizaciones
                        </nuxt-link>
                    </div>
            </div>
            <div 
                class="cta-proveedores"
                v-else
            >
            <a  
                class="complementary-label"
                v-if="quotation.length===0"
                data-toggle="modal" 
                data-target="#QuotationForm"
            > 
                Enviar cotización
            </a>
                <div class="modal fade" id="QuotationForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="ariaHidden">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <h1>Formulario de cotización</h1>
                            <button 
                                type="button" 
                                class="btn btn-complementary" 
                            >
                                Enviar formulario
                            </button>
                            <button 
                                type="button" 
                                class="btn btn-danger" 
                                data-dismiss="modal"
                            >
                                Cerrar formulario
                            </button>
                        </div>
                    </div>
                </div>
            <a  
                class="green-label"
                v-if="quotation.length!==0"
                data-toggle="modal" 
                data-target="#QuotationDescription"
            > 
                    Abrir cotización
            </a>
            </div>
            <div class="modal fade" id="QuotationDescription" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="ariaHidden">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <h1>Descripción de cotización</h1>
                            <button 
                                type="button" 
                                class="btn btn-secondary" 
                                data-dismiss="modal"
                            >
                                Cerrar cotización
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>

<script>
const stringDefault = {
  type: String,
  required: true,
  default:''
}
export default {
    name:'EventNeed',
    props: {
        _id:stringDefault,
        description:stringDefault,
        service:Object,
        quotation:Array
  }, methods:{
      setActiveNeed(){
          this.$store.commit('event/changeNeed', {
              _id:this._id,
              description:this.description,
              service:this.service,
              quotation:this.quotation
          })
      }
    }
}
</script>

<style lang="scss" scoped>
.green-label{
  color:green;  
}
.complementary-label{
    color:$complementary; 
}
.inactive{
    color:$danger;
}
.inactive:hover::after{
    content:':(';
    transition:1s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    color:$danger;
}
.cta-needs{
    color:$complementary;
}
.card{
    flex-direction:inherit;
    border:none;
}
.need-icon{
    padding-right: 25px;
}
.card-body{
    padding:0;
}
i{background-color: #ffff00;
    padding: 40% 80%;
    border-radius: 50%;
    }
</style>