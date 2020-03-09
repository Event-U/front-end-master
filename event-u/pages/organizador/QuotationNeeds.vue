<template>
  <div>
      <div class="title">
        <h4>
            {{activeNeed.service.name}}
        </h4>
        <h6>
            {{activeNeed.description}}
        </h6>
      </div>
      <div class="row needs-row mt-3">
        <div
            class="col-sm-4 mt-3 quotation-container"
            v-for="(quotation,i) in quotations"
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
import {mapState} from 'vuex';
import NeedQuotation from '@/components/ui/NeedQuotation.vue'

export default {
    name:'QuotationNeeds',
    components:{
        NeedQuotation
    },
    data() {
        return{
            name:'Cotizaciones',
            quotations:[
                {
                _id:'11111111',
                provider:{
                    businessName: 'Birza'
                },
                price:1400,
                image:'https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/2018_Rental_Trends_Bright_Zialena-1_1.jpg',
                state:3,
                date:'25 de Mayo',
                description:'Las mejores mesas de la ciudad'
            },
                {
                _id:'2222222222',
                provider:{
                    businessName:'Chuchito Perez'
                },
                price:125,
                image:'https://www.jjslist.com/blog/wp-content/uploads/2015/09/cocktail-tables.jpg',
                state:2,
                date:'25 de Mayo',
                description:'Las mejores mesas de la ciudad'
            },
                {
                _id:'333333333',
                provider:{
                    businessName:'Makabi'
                },
                price:1252,
                image:'https://farmandtablenm.com/wp-content/uploads/2020/01/Ex-novo-dinner-2019-table.jpg',
                state:1,
                date:'25 de Mayo',
                description:'Las mejores mesas de la ciudad'
            },
            ],
        }},
    mounted(){
        this.$store.commit('change',this.name)
    }, computed: mapState({
        activeNeed:state=> state.event.activeNeed
    })
    ,
}
</script>

<style lang="scss" scoped>
.quotation-container:nth-of-type(2n){
    border-left:1px solid #CCCCCC;
}
.quotation-container{
border-bottom:1px solid #CCCCCC;
transition:.3s ease-out;
padding-bottom:10px!important;
padding-left:5px;
padding-top:10px;
}
.quotation-container:hover{
    transition:.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 12px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
}
.row{
    margin:0;
}
</style>