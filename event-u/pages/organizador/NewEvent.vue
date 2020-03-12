<template>
  <div>
      <div class="event-preview mt-3" v-if="currentStepNumber>=4 && formInProgress">
          <h1 class="animated bounce">
              ¡Éste es tu nuevo evento!
          </h1>
          <div class="col-md-5 justify-content-center">
            <event-card
                class="event-card"
                v-bind="eventObject"
                style="max-width:70%; 
                    justify-content:center"
            />
          </div>
      </div>
        <div 
            class="needs-preview row m-0 mt-3" 
            v-if="currentStepNumber===3"
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
            v-if='currentStepNumber>1 && currentStepNumber<=3'
            @click="lastQuestion"
          >

            <i class="fas fa-long-arrow-alt-left"></i>
              Atrás
          </button>
          <button 
          :disabled="!canGoNext"
          v-if='currentStepNumber<=3'
            class="btn btn-iconed animated"
            @click="nextQuestion"
            >
              Siguiente
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
            <button 
            v-if='currentStepNumber>=4 && formInProgress'
            class="btn btn-iconed"
            @click="lastQuestion"
            >
              Editar evento
              <i class="fas fa-edit"></i>
          </button>
          <button 
            v-if='currentStepNumber>=4 && formInProgress'
            class="btn btn-iconed animated wobble"
            @click="submitEvent"
            >
              Subir evento
              <i class="fas fa-hand-point-up"></i>
          </button>
      </div>
    <div v-if="this.asyncState==='pending' && !formInProgress " class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
     <span class="sr-only">Loading...</span>
    </div>
      <div class="animated tada" v-if="this.asyncState==='success'&& !formInProgress">
          <h1>
              ¡Genial, creaste tu evento!
          </h1>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import NewNeedForm from '@/components/sections/NewNeedForm.vue'
import EventBasicInfo from '@/components/ui/forms/EventBasicInfo.vue'
import EventSpecificInfo from '@/components/ui/forms/EventSpecificInfo.vue'
import EventCard from '@/components/ui/EventCard.vue'
import EventNeed from '@/components/ui/EventNeed.vue'

export default {
name:'NewEvent',
components:{
    NewNeedForm,
    EventBasicInfo,
    EventSpecificInfo,
    EventCard,
    EventNeed
},
data(){
    return{
        asyncState:null,
        canGoNext:false,
        name:'Nuevo evento',
        currentStepNumber:1,
        length:4,
        eventObject:{
            name:'',
            description:'',
            date:'',
            addreses:'',
            image:'',
            organizator:'',
            needs:[],
         },
        steps:[
            'EventBasicInfo',
            'EventSpecificInfo',
            'NewNeedForm'
        ]
        }
    },
    mounted(){
        this.$store.commit('change',this.name)
    }, 
    computed:{
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
        }
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
                service:{
                    name:e.serviceId},
                quotation:[],
                isNew:true
            })
        },
        editEvent(){
            this.currentStepNumber=0
        },
        submitEvent(){
            this.currentStepNumber++
            this.asyncState='pending'
            setTimeout(()=>{
                this.asyncState='success'
            },3000)
        }
    }
}
</script>

<style lang='scss' scoped>
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
</style>