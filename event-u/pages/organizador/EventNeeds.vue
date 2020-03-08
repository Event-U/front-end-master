<template>
  <div>
    <div class="title">
      <h1>
         {{activeEvent.name}} 
      </h1>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Necesidades',
    computed: mapState({
        activeEvent:state=> state.event.activeEvent
    })
    ,
    mounted () {
       this.$store.commit('change','Necesidades evento')
  }

}
</script>

<style lang="scss" scoped>

h1{
    @extend .h2-font;
    font-size:3em;
    text-align:center;
}

</style>