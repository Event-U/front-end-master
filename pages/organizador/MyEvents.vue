<template>
<div id="main-wrapper" class="list-services-content">
    <div 
        class="row">
        <div 
            class="col-md-4 align-center" 
            v-for="(event,i) in events"
            :key="i"
        >
            <!-- <nuxt-link
                to="/organizador/EventNeeds"
            > -->
                <event-card
                    v-bind="event"
                />
            <!-- </nuxt-link> -->
        </div>
    </div>
</div>
</template>

<script>
import api from '@/lib/api'
import EventCard from '@/components/ui/EventCard.vue'
import {mapMutations,mapState} from 'vuex'

export default {
  name: 'MyEvents',
  components: {
        EventCard,
    },
    data() {
        return{
            name:'Mis Eventos',
        }
    },    
    created() {
        this.$store.commit('change', this.name)
        this.$store.dispatch('events/fetchEvents')
        this.$store.dispatch('services/fetchServices')
  },
  computed:mapState('events',['events'])
}
</script>

<style scoped>
.row{
    margin:0;
}
h5{
    color:white!important;
    font-size: 2em; 
    font-weight: 100;
}

.list-services-content{
    margin-top:3%;
    transition:ease-out .8s;
}

.list-services-content .card-text {
    color: #333333;
    font-weight: normal!important;
    font-size: .8em;
}

.list-services-content .card:hover {
    border: solid #FFFF00 .5px;
    box-shadow: 0px 0px 30px #FFFF00;
    transition:ease-in .5s;
}

.list-services {
    font-size: 2em;
    color: black;
}

</style>
