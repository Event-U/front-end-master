<template>
<div 
    class="card" 
    @click="setActiveNeed"
>
    <div 
        class="
                need-icon 
                animated 
                fadeInLeft"
    >
     <i class="fas fa-angle-right"/>
    </div>
    <div class="card-body">
        <h5 v-if="service" class="card-title">{{serviceNameById(service)}}</h5>
        <p class="card-text">{{description}}</p>
        <div 
            class="ctas-needs"
            v-if="this.$route.path!=='/organizador/NewEvent'"
        >
            <cta-organizers
                v-if="this.$route.path==='/organizador/EventNeeds'"
                :quotation="quotation"
                 @click="setActiveNeed"
            />
            <cta-provider
                :_id="_id"
                :quotation="quotation"
                v-else
                 @click="setActiveNeed"
            />
        </div>
    </div>
</div>
</template>

<script>
import CtaOrganizers from '@/components/ui/utilities/CtaOrganizers.vue'
import CtaProvider from '@/components/ui/utilities/CtaProvider.vue'
import {mapState, mapGetters} from 'vuex'

const stringDefault = {
  type: String,
  required: true,
  default:''
}
export default {
    name:'EventNeed',
    props: {
        _id:stringDefault,
        description:stringDefault,
        service:String,
        quotation:Array
  },components:{
      CtaOrganizers,
      CtaProvider
  },
  computed:{
      ...mapGetters('service',['serviceNameById'])
  },
  methods:{
      setActiveNeed(){
        this.$store.dispatch('service/getNameService', this.service)
        this.$store.commit('event/changeNeed', {
            _id:this._id,
            description:this.description,
            service:this.service,
            quotation:this.quotation,
        //   serviceName:this.serviceNameById(this.service)
        })
        this.$store.commit('quotation/SET_NEED_ID', this._id)
      },
    }
}
</script>

<style lang="scss" scoped>
.green-label{
  color:green;  
}
.complementary-label{
    color:$complementary; 
}
.inactive{
    color:$danger;
}
.inactive:hover::after{
    content:':(';
    transition:1s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    color:$danger;
}
.cta-needs{
    color:$complementary;
}
.card{
    flex-direction:inherit;
    border:none;
}
.need-icon{
    padding-right: 25px;
}
.card-body{
    padding:0;
}
i{background-color: #ffff00;
    padding: 40% 80%;
    border-radius: 50%;
    }
</style>