<template>
<div id="main-wrapper" class="list-services-content">
        <div 
            class="row">
            <div 
                class="col-md-6" 
                v-for="(event,i) in events"
                :key="i"
            >
                <event-card
                    v-bind="event"
                />
            </div>
        </div>
</div>
</template>

<script>
import api from '@/lib/api'
import EventCard from '@/components/ui/EventCard.vue'
import {mapMutations} from 'vuex'

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
                addreses:'stringDefault',
                image:'https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg',
                _id:'asdasdas',
                needs:['Cocacola','asdasdas']
                },
                {
                name:'Unas chelitas',
                description:'Carne asada para las personas que quieran comer un poco de carnishhhh',
                date:'20 De Marzo del 2020',
                addreses:'stringDefault',
                image:'https://49sld323cs9n1nf0on1vs798-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/homepage_EMS_CenterPhoto.jpg',
                _id:'asdasdas',
                needs:['Cocacola','asdasdas']
                },
                {
                name:'Chingo de cheve',
                description:'Carne asada para las personas que quieran comer un poco de carnishhhh',
                date:'20 De Marzo del 2020',
                addreses:'stringDefault',
                image:'https://res.cloudinary.com/eventboost/image/upload/w_auto,f_auto,q_auto:eco/v1482160079/website/homeSlider/slider2-resize.jpg',
                _id:'asdasdas',
                needs:['Cocacola','asdasdas']
                },
            ],
            
        }
    },    
    mounted () {
       this.$store.commit('change', this.name)
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
