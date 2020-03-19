<template>
  <div>
      <div class="title mt-3 animated fadeInUp">
        <h4>
            {{activeNeed.service.name}}
        </h4>
        <h6>
            {{activeNeed.description}}
        </h6>
      </div>
      <div class="row needs-row mt-3">
        <div
            class="col-sm-5 mt-3 quotation-container animated fadeInDown"
            v-for="(quotation,i) in activeNeed.quotation"
            :key="i"
        >
            <need-quotation
                v-bind="quotation"
            />
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
import NeedQuotation from '@/components/ui/NeedQuotation.vue'

export default {
    name:'QuotationNeeds',
    components:{
        NeedQuotation
    },
    data() {
        return{
            name:'Cotizaciones',
        }},
    mounted(){
        this.$store.commit('change',this.name)
        this.$store.dispatch('quotation/fetchQuotation')
    }, computed: {
        ...mapGetters('quotation',['quotationsByNeedId']),
        ...mapState({
        activeNeed:state=> state.event.activeNeed,
        needId:state=>state.quotation.needId
    })
    },
}
</script>

<style lang="scss" scoped>
.title{
    text-align:center;
    h4{
        @extend .h2-font;
        font-size:1.5em;
    }
    h6{
        @extend .h4-font;
        font-size:1em;
    }
}
.quotation-container:nth-of-type(n){
    border-left:.5px solid #CCCCCC;
}
.quotation-container{
border-bottom:.1px solid #CCCCCC;
transition:.3s ease-out;
padding-bottom:10px!important;
padding-left:5px;
padding-top:10px;
}
.quotation-container:hover{
    transition:.3s ease-in;
    border-radius: 12px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
    border:1px solid #CCCCCC;
}
.row{
    margin:0;
}
</style>