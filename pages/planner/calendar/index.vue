<template>
<div class='container-fluid'>
    <div class="row justify-content-around">
        <div class="col-md-9">
            <full-calendar
                :events='eventss'
            />
        </div>
    </div>
</div>
</template>

<script>
import {mapMutations,mapState} from 'vuex'

export default {
    name:'Calendario',
     data(){
        return{
            name:'Mi calendario',
        }
    },
    mounted(){
        this.$store.commit('change',this.name)
    },
    created() {
        this.$store.commit('change', this.name)
        this.$store.dispatch('events/fetchEvents')
        this.$store.dispatch('services/fetchServices')
  },
  computed:{
      eventss(){
       return this.events.map((event) => ({
            title: event.name,
            date: event.date
        }))
      },
      ...mapState('events',['events']),
      }
  
}
</script>

<style lang='scss'>
.container-fluid{
    margin:0!important;
}
.calendar{
    max-width:50%;
}
</style>