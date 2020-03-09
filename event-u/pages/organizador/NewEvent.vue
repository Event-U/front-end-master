<template>
  <div>
      <new-need-form/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import NewNeedForm from '@/components/sections/NewNeedForm.vue'
export default {
name:'NewEvent',
components:{
    NewNeedForm
},
data(){
    return{
        name:'Nuevo evento'
    }
},
mounted(){
    this.$store.commit('change',this.name)
}
}
</script>

<style>

</style>