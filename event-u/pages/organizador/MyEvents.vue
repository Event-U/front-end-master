<template>
        <div id="main-wrapper" class="list-services-content">
            <div 
                class="row">
                <div 
                    class="col-md-6" 
                    v-for="(event,i) in events"
                    :key="i"
                >
                    <a>
                        <event-card
                            v-bind="event"
                            @clic="seeEvent"
                        />
                    </a>
                </div>
            </div>
    </div>
</template>

<script>
import api from '@/lib/api'
import EventCard from '@/components/ui/EventCard.vue'

export default {
  name: 'MyEvents',
  components: {
        EventCard,
    },
    props:{

    },
    data() {
        return{
            name:'Mis Eventos',
            events:[
                {
                name:'Carne Asada',
                description:'Carne asada para las personas que quieran comer un poco de carnishhhh',
                date:'20 De Marzo del 2020',
                addresses:'stringDefault',
                image:'asdasdasdasda',
                _id:'asdasdas',
                needs:['Cocacola','asdasdas']
                },
                {
                name:'Carne Asada',
                description:'Carne asada para las personas que quieran comer un poco de carnishhhh',
                date:'20 De Marzo del 2020',
                addresses:'stringDefault',
                image:'asdasdasdasda',
                _id:'asdasdas',
                needs:['Cocacola','asdasdas']
                },
                {
                name:'Carne Asada',
                description:'Carne asada para las personas que quieran comer un poco de carnishhhh',
                date:'20 De Marzo del 2020',
                addresses:'stringDefault',
                image:'asdasdasdasda',
                _id:'asdasdas',
                needs:['Cocacola','asdasdas']
                },
            ],
            
        }
    },    
    computed: {
     setActivePage() {
      return this.$store.commit('change', 'Mis eventos')
    }
  },
  methods:{
       seeEvent(e){
        this.$emit('eventId', {
            _id:e._id,
            needs: this.needs,
            description:e.description,
            date:e.date,
            name: e.name,
            needsObjects: e.needsObjects
        })
      }
  }
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
