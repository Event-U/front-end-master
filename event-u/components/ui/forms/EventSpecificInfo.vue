<template>
  <div class="form-group">
      <h1>Ahora la información específica</h1>
    <label for="eventDate">Fecha de tu evento</label>
        <datetime v-model="date" @input="setSpecificEventInfo"></datetime>
    <label  for="addressEvent">Dirección de tu evento</label>
    <textarea @input="setSpecificEventInfo" v-model="addreses" class="form-control" id="addressEvent" rows="3" placeholder="Descríbenos tu evento"></textarea>
    <input @input="setSpecificEventInfo" v-model="image" type="email" class="form-control" id="eventImage" placeholder="Inserta la URL de tu imagen">
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

<style>

</style>