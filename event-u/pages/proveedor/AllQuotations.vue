<template>
  <div>
    <h1>
      {{activeEvent.name}}
    </h1>
    <h4>
      {{activeEvent.description}}
    </h4>
      <quotation-list/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import QuotationList from '@/components/sections/QuotationList.vue'

export default {
    name:'QuotationNeeds',
    components:{
      QuotationList
    },
     data() {
        return{
            addingNeed: false,
            name:'Mis cotizaciones',
            }
    },
    computed: mapState({
        activeEvent:state=> state.event.activeEvent
    }),
    mounted () {
       this.$store.commit('change',this.name)
  },
}
</script>

<style lang='scss' scoped>
  h1{
      @extend .h2-font;
      font-size:3em;
      text-align:center;
  }
  h4{
    @extend .h5-font;
    text-align:center;
  }
</style>