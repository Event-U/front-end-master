<template>
<form class='mt-3'>
    <div class="title animated fadeInDown">
        <h3 
            class="mb-3"
        >
            Nueva necesidad
        </h3>
    </div>
  <div class="row">
    <div 
        class="input-group mb-3 col"
    >
            <div class="input-group-prepend animated fadeInDown">
                <label 
                    class="input-group-text" 
                    for="inputGroupSelect01"
                >
                    Categoría
                </label>
            </div>
            <select
                v-model="categoryId"
                class="custom-select" 
                id="inputGroupSelect01"
            >
            <option selected>Elige una categoría...</option>
                <option-input
                    v-for="category in categories"
                    :key='category._id'
                    v-bind="category"
                />
            </select>
    </div>
    <div class="input-group mb-3 col">
        <div class="input-group-prepend animated fadeInDown">
        <label class="input-group-text" for="inputGroupSelect01">Servicio</label>
        </div>
        <select v-model="service" class="custom-select" id="inputGroupSelect01">
        <option selected>Elige un servicio...</option>
        <option-input
            v-for="serviceOption in servicesByCategoryId(categoryId)"
            :key='serviceOption._id'
            v-bind="serviceOption"
        />
        </select>
    </div>
  </div>
  <div class="input-group animated fadeInUp">
  <div class="input-group-prepend">
    <span class="input-group-text">
        Descripción de tu necesidad
    </span>
  </div>
  <textarea 
    class="form-control" 
    aria-label="With textarea"
    v-model="description"
  ></textarea>
</div>
    <div class="hover-interaction animated bounce delay-3s">
        <button
        v-if="this.$route.path==='/organizador/EventNeeds'"
        class="btn btn-iconed mt-3" 
        role="button"
            @click.prevent="onSubmit"
        >
            <i class="fas fa-angle-right"></i> <span class="spn">Agregar necesidad</span>
        </button>
        <button
        v-if="this.$route.path==='/organizador/newevent'"
        class="btn btn-iconed mt-3" 
        role="button"
            @click.prevent="onSubmitNew"
        >
            <i class="fas fa-angle-right"></i> <span class="spn">Agregar nueva necesidad</span>
        </button>
    </div>
</form>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import OptionInput from '@/components/ui/forms/OptionInput.vue'
import api from '@/lib/api.js'

export default {
    name:'NewNeedForm',
    components:{
        OptionInput
    },data(){
        return{
            categoryId:'',
            service:'',
            description:''
        }
    },
    methods:{
    onSubmit:function(){
        this.$store.dispatch('need/postNeedToEvent',{
                    description:this.description,
                    service:this.service,
                    quotation:[]
                }),
         
            this.categoryId=''
            this.serviceId=''
            this.description=''
    },
    async onSubmitNew(){
       await this.$store.dispatch('need/postNeed',{
            description:this.description,
            service:this.service,
            quotation:[]
        }),
         this.$emit('newNeed', {
                categoryId:this.categoryId,
                service:this.service,
                description:this.description,
                _id:this.$store.state.need.newNeed._id,
            })
             this.categoryId=''
            this.serviceId=''
            this.description=''
    } 
    },created(){
        this.$store.dispatch('service/fetchCategories'),
        this.$store.dispatch('service/fetchServices')
    },
    computed:{ 
       ...mapGetters('service',['servicesByCategoryId']),
        ...mapState({
            categories: state=> state.service.categories,
        })
    }
}
</script>

<style lang='scss' scoped>
.hover-interaction{
    @extend .btn-hover-interaction;
    text-align: center;
}
h3{
    @extend .h2-font;
    font-weight: 200;
    font-size: 2em;
    text-align:center;
}
button{
    @extend .btn-eventu;
    align-self:center;
}
form{
    align-items:center;
    margin:10%;
}
.input-group-prepend,label,.input-group-text{
    background: #eeeeee;;
    @extend .h4-font;
    font-weight: 400;
    color:#333333;
    // boder: .2px solid #333333;
    border-radius:8px;
}

</style>