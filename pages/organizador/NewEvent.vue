<template>
  <div>
        <div 
            class="event-preview mt-3" 
            v-if="currentStepNumber>=5 && formInProgress"
        >
        <h1 
            class=""
        >
            ¡Éste es tu nuevo evento!
        </h1>
        <div 
            class="col-md-5 justify-content-center"
        >   
            <event-card
                class="event-card"
                v-bind="eventObject"
                style="max-width:50%;
                max-height:50%; 
                    justify-content:center"
            />
          </div>
      </div>
        <div 
            class="needs-preview row m-0 mt-3" 
            v-if="currentStepNumber===4"
        >
          <div
            v-for="(need, i) in eventObject.needs"
           class="col-md-3 need-col"
           :key='i'>
            <event-need
                v-bind='need'
            />
          </div>
      </div>
      <div class="dynamic-form" v-if="formInProgress">
        <keep-alive>
            <component 
                class="my-element"
                v-show="asyncState!=='pending'"
                ref='currentStep'
                :is="steps[currentStepNumber-1]" 
                v-bind="eventObject"
                @update="update"
                @newNeed="addNewNeed"
                @newAdress="addNewAdress"
            />
        </keep-alive>
      </div>
      <div class="progress-bar">
          <div
            :style="`width: ${progress}%`"
          />
      </div>
      <div class="buttons hover-interaction mt-3">
          <button 
            class="btn btn-iconed btn-outlined"
            v-if='currentStepNumber>1 && currentStepNumber<=4'
            @click="lastQuestion"
          >
            <i class="fas fa-long-arrow-alt-left"></i>
              Atrás
          </button>
          <button 
            :disabled="!canGoNext"
            v-if='currentStepNumber<=4'
            class="btn btn-iconed animated"
            @click="nextQuestion"
            >
              Siguiente
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
            <button 
            v-if='currentStepNumber>=5 && formInProgress'
            class="btn btn-iconed"
            @click="lastQuestion"
            >
              Editar evento
              <i class="fas fa-edit"></i>
          </button>
          <button 
            v-if='currentStepNumber>=5 && formInProgress'
            class="btn btn-iconed "
            @click="submitEvent(eventObject)"
            >
              Subir evento
              <i class="fas fa-hand-point-up"></i>
          </button>
      </div>
    <div v-if="this.asyncState==='pending' && !formInProgress " class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
     <span class="sr-only">Loading...</span>
    </div>
      <div class="event-created text-center" v-if="this.asyncState==='success'&& !formInProgress">
          <h1>
              ¡Felicidades, creaste tu evento!
          </h1>
          <button
             class="btn btn-iconed animated fadeInUp mt-3"
             @click='goToBoard(newEventId)'
          >
            Planificar mi evento
          </button>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
name:'NewEvent',
head () {
      return {
          title: 'Nuevo evento', 
          meta: [
            {'og:title': 'Sitio web para organizar eventos en México'},
            {'og:type': 'page'},
            {'og:description': 'Comienza a generar ganancias en el mercado de eventos en México. No importa sí eres organizador, proveedor o inversionista.'},
            {'og:image': '../assets/landing/images/dashboard.png'},
             {
                  hid: 'description',
                  name: 'description',
                  content: 'Comienza a utilizar Event-U y comienza a generar en el mercado de eventos'
              }
          ]
      }
  },
components:{
    NewNeedForm:()=> import(/* webpackChunkName: "NewNeedForm" */'@/components/sections/NewNeedForm.vue'),
    EventBasicInfo:()=> import(/* webpackChunkName: "EventBasicInfo" */'@/components/ui/forms/EventBasicInfo.vue'),
    EventSpecificInfo:()=> import(/* webpackChunkName: "EventSpecificInfo" */'@/components/ui/forms/EventSpecificInfo.vue'),
    EventCard:()=> import(/* webpackChunkName: "EventCard" */'@/components/ui/EventCard.vue'),
    EventNeed:()=> import(/* webpackChunkName: "EventNeed" */'@/components/ui/EventNeed.vue'),
    NewEventAdress:()=> import(/* webpackChunkName: "NewEventAdress" */'@/components/sections/NewEventAdress.vue'),},
data(){
    return{
        asyncState:null,
        canGoNext:false,
        name:'Nuevo evento',
        currentStepNumber:1,
        length:5,
        eventObject:{
            name:'',
            description:'',
            date:'',
            addreses:'',
            image:'',
            needs:[],
         },
        steps:[
            'EventBasicInfo',
            'EventSpecificInfo',
            'NewEventAdress',
            'NewNeedForm',
        ],
        }
    },
    mounted(){
        this.$store.commit('change',this.name)
    }, 
    computed:{
        newEventId:'',
        ...mapState({
            activeUser:state=>state.activeUser
        }),
        progress(){
            return this.currentStepNumber/this.length*100
        },
        currentStep(){
            return this.steps[this.currentStepNumber-1]
        },
        isLastStep(){
            return this.currentStepNumber===this.length
        },
        formInProgress(){
            return this.currentStepNumber<= this.length
        },
    },
    methods:{
        update(e){
            this.canGoNext=true
            Object.assign(this.eventObject, e)
        },
        lastQuestion(){
            this.canGoNext=true
            this.currentStepNumber--
        },
        nextQuestion(){
            this.canGoNext=false
            this.currentStepNumber++
        },
        addNewNeed(e){
            this.canGoNext=true
            this.eventObject.needs.push({
                _id:e._id,
                category:e.categoryId,
                description:e.description,
                service:e.service,
                quotation:[],
                isNew:true
            })
        },
        addNewAdress(e){
            this.address=this.$store.state.addresses.newAdress
            this.canGoNext=true
        },
        editEvent(){
            this.currentStepNumber=0
        },
        async submitEvent(eventObject){
            this.asyncState='pending'
            this.currentStepNumber++
           await this.$store.dispatch('events/postEvent',{
                organizator:this.activeUser,
                ...eventObject
            })
            this.asyncState='success'
            this.newEventId=this.$store.state.events.newEvent._id
        },
        goToBoard(id){
            this.$router.push({
            name:"planner-board-event-id", 
            params:{id:id},
        })
        
        }
    }
}
</script>

<style lang='scss' scoped>
.btn{
        @extend .btn-eventu;
        @extend .h4-font;
        box-shadow: 0px 0px 10px #ffff0078;
        font-size:1.2em;
        transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
        text-align: center;
    }
.need-col{
    border-left: 1px solid #B8B8B8;
}
.event-preview{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    @extend .h2-font;
    font-weight: 500;
    text-align:center;
}
.event-card{
    .event-card-content{
        display: flex;
        flex-direction: column;
        background: linear-gradient(0deg, #000000bf, transparent);
        justify-content: flex-end;
    }
    h5{
        @extend .h2-font;
        color:white;
        font-size: 3.3em;
    }

    p{
        color:#B8B8B8;
        @extend .h4-font;
        font-size:1em;
    }

    .list-services-content .card {
        border-radius: 34px 20px 0px;
        border: none;
        margin-bottom: 20px;
        transition: 1s ease-out;
        height: auto;
    }

    .service-date {
        font-size: 1em;
        @extend .h4-font;
        color:white;
    }
    .list-services-content img{
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
        border-radius: 34px 20px 0px;
        height:300px;
        overflow: hidden;
        object-fit: cover;
    }
}
.hover-interaction{
    display:flex;
    justify-content: space-around;
    @extend .btn-hover-interaction;
    .btn:hover{
        box-shadow: 0px 0px 10px #3333;
        font-size:1.25em;
        transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
    }
    .btn{
        @extend .btn-eventu;
        @extend .h4-font;
        box-shadow: 0px 0px 10px #ffff0078;
        font-size:1.2em;
        transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
    }
}

// Ken Burns when the input is active::after


.kb{
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat 50% 50%;
  background-size: cover;
  animation-name: kenburns;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 16s;
  opacity: 1;
  transform: scale(1.2);
}

@keyframes kenburns { 
0% {
 opacity: 1;
 transform: scale(1.2);
 transform: scale(1.2);
}
 1% {
 opacity: 1;
}
 23% {
 opacity: 1;
}
 26% {
 opacity: 0;
 transform: scale(1);
 transform: scale(1);
}
 100% {
 opacity: 0;
 transform: scale(1.2);
 transform: scale(1.2);
}
 98% {
 opacity: 0;
 transform: scale(1.21176);
 transform: scale(1.21176);
}
 100% {
 opacity: 1;
}
}

</style>