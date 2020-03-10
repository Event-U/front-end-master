<template>
  <div class="form-group">
      <h1>Pongamos la información básica</h1>
    <label for="eventName">Nombre de tu evento</label>
    <input @input="setActiveEvent" v-model="name" type="email" class="form-control" id="eventName" placeholder="Escribe el nombre de tu evento">
     <label  for="exampleFormControlTextarea1">Descripción de tu evento</label>
    <textarea @input="setActiveEvent" v-model="description" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descríbenos tu evento"></textarea>
</div>
  
</template>

<script>
export default {
    name:'EventBasicInfo',
    data(){
        return{
            name:'',
            description:''
        }
    },
    methods:{
        setActiveEvent(){
          this.$emit('update', {
              name:this.name,
              description:this.description
          })
    }
}}
</script>

<style>

</style>