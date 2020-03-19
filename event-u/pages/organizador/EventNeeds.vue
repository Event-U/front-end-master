<template>
<div>
    <div class="title ">
        <h1>
         {{activeEvent.name}} 
        </h1>
    </div>
    <div class="row needs-row mt-3">
        <div
            class="col-sm-5 mt-3 need-container"
            v-for="(need,i) in needs"
            :key="i"
        >
            <event-need
                v-bind="need"
                class='mt-3 need-card'
            />
        </div>
    </div>
    <div class="col new-need-container">
        <button
             v-if="addingNeed!==true"
            @click="actionNewNeed"
            class="btn btn-iconed mt-3"
            role="button">
            <i class="fas fa-angle-right"></i> <span class="spn">Agregar necesidades</span>
        </button>
        <new-need-form
            v-if="addingNeed"
            @newNeed="newNeed"
        />
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import EventNeed from '@/components/ui/EventNeed.vue'
import NewNeedForm from '@/components/sections/NewNeedForm.vue'

export default {
    name:'EventNeeds',
    components:{
        EventNeed,
        NewNeedForm
    },
     data() {
        return{
            addingNeed: false,
            name:'Necesidades evento',
         }
    },created () {
           this.$store.commit('change',this.name),
            this.$store.dispatch('need/fetchNeeds',this.activeEvent._id)
      },
    computed: mapState({
        activeEvent:state=> state.event.activeEvent,
        needs:state=>state.need.needs
    }),
  methods: {
    actionNewNeed(e){
        this.addingNeed=true
    },newNeed() {
        this.$store.dispatch('need/fetchNeeds')
    }
  }}

</script>

<style lang="scss" scoped>
.new-need-container{
    text-align:center;
    @extend .btn-hover-interaction;
}
.btn{
    padding: 1% 2%;
    border-radius: 8px;
    border: 1.5px solid #333333;
    @extend .h3-font;
    font-size:1.5em;
    text-align: center;
    transition: .3s ease-out;
}
.btn:hover{
    @extend .btn-eventu;
    transition:.7s cubic-bezier(0.77, 0, 0.175, 1);
}
.need-container:nth-of-type(2n){
    border-left:1px solid #CCCCCC;
}
.need-container{
border-bottom:1px solid #CCCCCC;
transition:.3s ease-out;
}
.need-container:hover{
    border:3px solid #CCCCCC;
    transition:.3s ease-in;
    border-radius: 12px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
}

.row{
    margin:0;
}
h1{
    @extend .h2-font;
    font-size:3em;
    text-align:center;
}

.needs-row{
    justify-content: center;
}


</style>