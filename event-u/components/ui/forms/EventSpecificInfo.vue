<template>
<div class="mt-3 mb-3">
    <h1 class="animated fadeIn">Ahora la información específica de tu evento</h1>
    <div class="form-row mt-3">
        <div class="form-grop col-md-4 animated fadeInRight">
            <label for="eventDate">Fecha de tu evento</label>
            <datetime 
                v-model="date" 
                @input="setSpecificEventInfo"
                type='datetime'
            >
                <template slot="button-cancel">
                    Cancelar
                </template>
                <template slot="button-confirm" class=" animated fadeIn">
                    Confirmar
                </template>
            </datetime>
        </div>
        <div class="form-grop col-md-4 animated fadeInRight">
            <label  for="addressEvent">Dirección de tu evento</label>
            <input @input="setSpecificEventInfo" v-model="addreses" class="form-control" id="addressEvent" rows="3">
        </div>
        <div class="form-grp col-md-5 animated fadeInLeft">
            <label  for="addressEvent">Inserta la URL de tu imagen</label>
            <input @input="setSpecificEventInfo" v-model="image" type="email" class="form-control" id="eventImage" >
        </div>
    </div>
</div>

</template>

<script>
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

export default {
    name:'EventSpecificInfo',
    components:{
        Datetime
    },
    data(){
        return{
            date:null,
            addreses:'',
            image:''
        }
    },
    methods:{
        setSpecificEventInfo(){
          this.$emit('update', {
              date:this.date,
              addreses:this.addreses,
              image:this.image
          })
    }
}}
</script>

<style lang='scss' scoped>
label{
    @extend .h4-font;
}
.form-row{
    align-self: center;
    justify-content: center;
    margin:0;
}
.form-group{
    margin-bottom: 1rem;
    // display: flex;
    // justify-content: center;
    // flex-direction: column;
    align-self: center;
    text-align:center;
}
.form-control, .as-label{
    transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
    font-size: 1em;
}
.form-control:focus{
    border-color:$alpha;
    box-shadow: 0px 0px 10px #ffff0078;
    transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
    @extend .h5-font;
    font-size: 1.3em;
}
h1{
    @extend .h2-font;
    font-size:2em;
    font-weight: 200;
    text-align:center;
}
</style>