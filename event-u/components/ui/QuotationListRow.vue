<template>
    <tr>
        <th scope="row">{{this.$route.path==='/organizador/allquotations' ? event.name : need.service.category}}</th>
        <td>
            {{ need.service.name}}
        </td>
        <td>{{this.$route.path==='/organizador/allquotations' ? provider.businessName : need.description}}</td>
        <td
            v-if="this.$route.path==='/organizador/allquotations'"
        >${{price}}mxn</td>
        <td
            v-if="this.$route.path==='/organizador/allquotations'"
        >
            <button 
                type="button" 
                @click="ariaHidden=false" 
                class="btn" 
                data-toggle="modal" 
                :data-target="`#exampleModal`+_id"
            >
                Ver cotización
            </button>
            <div class="modal fade" :id="`exampleModal`+_id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" :aria-hidden="ariaHidden">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <need-quotation
                            :_id="_id"
                            :provider="provider"
                            :price="price"
                            :image="images"
                            :state="state"
                            :date="date"
                            :description="description"
                        />
                        <div class="modal-footer">
                         <button 
                            type="button" 
                            class="btn btn-secondary" 
                            data-dismiss="modal"
                         >
                            Cerrar cotización
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </td>   
        <td class="state-icon">
            <i v-if="state===3 && this.$route.path==='/organizador/allquotations'" class="fas fa-star"></i>
            <button v-if="state===3 && this.$route.path!=='/organizador/allquotations'" type="button" class="btn btn-primary" :data-target="`#exampleModal`+_id" data-toggle="modal" >Aceptada</button>
            <button v-if="state=== 2 && this.$route.path!=='/organizador/allquotations'" type="button" class="btn btn-secondary" disabled>Pendiente</button>
            <button v-if="state===1 && this.$route.path!=='/organizador/allquotations'" type="button" class="btn btn-danger" disabled>Denegada</button>
        </td>
    </tr>
</template>

<script>
import NeedQuotation from '@/components/ui/NeedQuotation.vue'

const stringDefault={
    required:true,
    type:String
}
export default {
name:'QuotationListRow',
components:{
    NeedQuotation
},
    props:{
        _id:stringDefault,
        provider:Object,
        price:Number,
        description:String,
        images:String,
        need:Object,
        state:Number,
        event:Object,
        date:String,
    },
    data(){
        return{
            ariaHiden:true,
        }
    }
}
</script>

<style lang='scss' scoped>
tr:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.166);
    border-radius:8px!important;
    transition: .3s cubic-bezier(0.23, 1, 0.320, 1);
    border:1px solid #CCCCCC;
}
tr{
    transition:.3s cubic-bezier(0.19, 1, 0.22, 1);
}
.modal-content{
border-radius:8px;
border:none;
transition:.5s cubic-bezier(0.23, 1, 0.320, 1);
}
.state-icon{
    color:$complementary;
    font-size:1.5em;
}
button{
    background-color:$complementary;
    color:white;
}
</style>