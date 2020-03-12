<template>
  <div>
      <new-service-form/>
  </div>
</template>

<script>
import NewServiceForm from '@/components/sections/NewServiceForm.vue'

export default {
    name:'NewService',
    components:{
        NewServiceForm,
    },
    data(){
        return{
            name:'Nuevo Servicio'
        }
    },
     mounted () {
       this.$store.commit('change',this.name)
  },
}
</script>

<style>

</style>