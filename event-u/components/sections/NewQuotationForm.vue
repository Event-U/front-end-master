<template>
<form>
    <h1>
        <!-- {{serviceName.name}} -->
    </h1>
    <h3>
        {{activeNeed.description}}
    </h3>
    <div class="form-group">
        <label for="exampleInputEmail1">Precio de tu cotización</label>
            <input 
                type="text" 
                class="form-control" 
                id="quotation-price" 
                v-model="newQuotationObject.price"
            >
        <small 
            id="emailHelp" 
            class="form-text text-muted"
        >
            Recuerda que éste es el precio final, no el precio unitario.
        </small>
    </div>
    <div class="form-group">
        <label for="validationTextarea">Descripción de tu cotización</label>
        <textarea 
            class="form-control" 
            id="validationTextarea" 
            placeholder="Required example textarea" 
            required
            v-model="newQuotationObject.description"
        />
    </div>
    <div class="form-group">
        <label for="quotation-image">Sube tu imagen</label>
        <input 
            type="text" 
            class="form-control" 
            id="quotation-image" 
            v-model="newQuotationObject.image"
        >
    </div>
    <button 
        class="btn btn-primary"
        @click.prevent="postQuotation(newQuotationObject)"
    >
        Subir Cotización
    </button>
</form>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import api from '@/lib/api.js'

export default {
    name:'NewQuotationForm', 
    data(){
        return{
            newQuotationObject:{
                price:0,
                description:'',
                image:'',
            }
        }
    },props:{
        userid:String,
        need:Object
    },
    mounted(){
        this.$store.dispatch('service/getNameService', this.service)
    },
    computed: {
        ...mapState({
        activeNeed:state=> state.event.activeNeed,
        serviceName:state=> state.service.activeNeedService,
        activeUser:state=>state.activeUser
         })
    },
    methods:{
        postQuotation({price,description,image}){
            this.$store.dispatch('quotation/postQuotation',{
                provider:this.activeUser,
                price:price,
                description:description,
                image:image,
                need:this.activeNeed._id
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>