<template>
<form>
    <h1>
        {{activeNeed.service.name}}
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
        <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    </div>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'NewQuotationForm', 
    data(){
        return{
            newQuotationObject:{
                provider:'',
                price:0,
                description:'',
                images:'',
            }
        }
    },props:{
        userid:String,
        need:Object
    },
    computed: mapState({
        activeNeed:state=> state.event.activeNeed
    })
}
</script>

<style lang="scss" scoped>

</style>