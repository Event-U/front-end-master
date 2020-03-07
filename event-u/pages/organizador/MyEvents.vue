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
        _id:{
            type:Array,
            required: false
        }
    },
    data() {
        return{
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
            loading: true,
            eventId:'',
            needsObjects:[],
            example:[]
        }
    },
//     async mounted () {
//         this.events.append() = await api.getEvent()
//          this.loading = false
//   },
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
}

.list-services-content .card-text {
    color: #333333;
    font-weight: normal!important;
    font-size: .8em;
}

.list-services-content .card:hover {
    border: solid #ffff00 3px;
    box-shadow: 0px 0px 25px #0000009e;
    transition: ease-in 0.3s;
}

.list-services {
    font-size: 2em;
    color: black;
}

</style>
