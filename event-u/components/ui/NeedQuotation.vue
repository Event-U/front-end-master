<template>
  <div class="card b-none animated fadeInUp" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4 image-bg ml-3" :style="styles">
        <h6 class="text-center">${{price}}</h6>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">{{provider.bussinesName}}</h5>
        <p class="card-text">{{description}}</p>
        <h5 class="card-text"><small class="text-muted">{{date}}</small></h5>
      </div>
    </div>
    <div 
        class="col-md-1 justify-content-center align-self-center animated fadeInRight delay-1s" 
        data-toggle="tooltip" 
        data-placement="right" 
        title="Guardar cotización"
        v-if="this.$route.path!=='/proveedor/EventQuotations'"
    >
            <div class=" quotation-actions d-flex flex-column justify-content-around text-center" >
                <i 
                    class="fas fa-star save" 
                    data-toggle="tooltip" 
                    data-placement="right" 
                    title="Guardar cotización"
                    @click="updateQuotationState(3,_id)"
                />
                <i 
                    class="fas fa-check aware" 
                    data-toggle="tooltip" 
                    data-placement="right" 
                    title="Adjudicar cotización"
                    @click="updateQuotationState(4,_id)"
                />
                <i 
                    class="fas fa-times delete" 
                    data-toggle="tooltip" 
                    data-placement="right" 
                    title="Deshechar cotización"
                    @click="updateQuotationState(2,_id)"
                />
            </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:'NeedQuotation',
    props:{
        _id:String,
        provider:Object,
        price:Number,
        image:String,
        status:Number,
        date:String,
        description:String,
        quotation:{},
    },
    computed: {
        styles() {
            return {
                'background-image': `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59.37%, #000000 100%), url(${this.image})`,
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
            }
        }
    },
    methods:{
        updateQuotationState(newState,id){
            console.log(id)
            this.$store.dispatch('quotation/updateQuotation',{
                status:newState,
                id:id,
                provider:this.provider,
                })
        }
    }
}
</script>

<style lang='scss' scoped>
i:hover{
    cursor:pointer;
}
p{
    @extend .body-font;
}
h5{
    @extend .h4-font;
    font-size:1.3em;
}
.image-bg{
    display: flex;
    flex-flow: column-reverse;
    box-shadow: 2px 2px 21px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    h6{
        color:#B8B8B8;
        text-align:left;
        font-size:1.2em;
    }
}
.card{
    border:none;
}
.quotation-actions{
    transition:.3s ease-out;
    border: 1px solid $alpha-100;
    box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    height: 100px;
    width:100%;
    font-weight: 800;
    font-size:1.5em;
    .save{
        color:$alpha;
         transition:.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .aware{
        color:$complementary;
         transition:.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .delete{
        color:$danger;
         transition:.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .save:hover{
        font-size:1.6em;
         transition:.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .aware:hover{
        font-size:1.6em;
         transition:.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .delete:hover{
        font-size:1.6em;
         transition:.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
}
.quotation-actions:hover{
     border: 2px solid $alpha-100;
    box-shadow: 2px 2px 17px rgba(0, 0, 0, 0.187);
    transition:.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
</style>