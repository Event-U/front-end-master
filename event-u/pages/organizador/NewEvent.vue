<template>
  <div>
      <keep-alive>
        <component 
            v-show="asyncState!=='pending'"
            ref='currentStep'
            :is="steps[currentStepNumber-1]" 
            v-bind="eventObject"
            @update="update"
            @newNeed="addNewNeed"
        />
      </keep-alive>
      <div class="progress-bar">
          <div
            :style="`width: ${progress}%`"
          />
      </div>
      <div class="buttons">
          <button 
            class="btn btn-outlined"
            v-if='currentStepNumber>1 && currentStepNumber<=3'
            @click="lastQuestion"
          >
              Back
          </button>
          <button 
          :disabled="!canGoNext"
          v-if='currentStepNumber<=3'
            class="btn"
            @click="nextQuestion"
            >
              Next
          </button>
            <button 
            v-if='currentStepNumber>=4'
            class="btn"
            @click="editEvent"
            >
              Editar evento
          </button>
          <button 
          v-if='currentStepNumber>=4||currentStepNumber===0'
            class="btn"
            @click="submitEvent"
            >
              Crear nuevo evento
          </button>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import NewNeedForm from '@/components/sections/NewNeedForm.vue'
import EventBasicInfo from '@/components/ui/forms/EventBasicInfo.vue'
import EventSpecificInfo from '@/components/ui/forms/EventSpecificInfo.vue'
import EventCard from '@/components/ui/EventCard.vue'

export default {
name:'NewEvent',
components:{
    NewNeedForm,
    EventBasicInfo,
    EventSpecificInfo,
    EventCard
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
            'NewNeedForm',
            'EventCard'
        ]
        }
    },
    mounted(){
        this.$store.commit('change',this.name)
    }, 
    computed:{
        progress(){
            return this.currentStepNumber/this.length*100
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
            this.eventObject.needs.push(e._id)
        },
        editEvent(){
            this.currentStepNumber=0
        },
        submitEvent(){
            this.asyncState='pending'
            setTimeout(()=>{
                this.asyncState='success'
            },3000)
        }
    }
}
</script>

<style>

</style>