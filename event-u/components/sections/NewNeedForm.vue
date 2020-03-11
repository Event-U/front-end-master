<template>
<form class='mt-3'>
    <div class="title animated fadeInDown">
        <h3 class="mb-3">Nueva necesidad</h3>
    </div>
  <div class="row">
    <div class="input-group mb-3 col">
        <div class="input-group-prepend animated fadeInDown">
        <label class="input-group-text" for="inputGroupSelect01">Categoría</label>
        </div>
        <select
            v-model="categoryId"
            class="custom-select" 
            id="inputGroupSelect01"
         >
        <option selected>Elige una categoría...</option>
        <option-input
            v-for="(category,i) in categories"
            :key='i'
            v-bind="category"
        />
        </select>
    </div>
    <div class="input-group mb-3 col">
        <div class="input-group-prepend animated fadeInDown">
        <label class="input-group-text" for="inputGroupSelect01">Servicio</label>
        </div>
        <select v-model="serviceId" class="custom-select" id="inputGroupSelect01">
        <option selected>Elige un servicio...</option>
        <option-input
            v-for="(service,i) in services"
            :key='i'
            v-bind="service"
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
        class="btn btn-iconed mt-3" 
        role="button"
            @click.prevent="onSubmit"
        >
            <i class="fas fa-angle-right"></i> <span class="spn">Agregar necesidad</span>
    </button>
    </div>
</form>
</template>

<script>
import OptionInput from '@/components/ui/forms/OptionInput.vue'
import api from '@/lib/api.js'
export default {
    name:'NewNeedForm',
    components:{
        OptionInput
    },data(){
        return{
            categories:[
                {
                name:'Cosas',
                _id:'asdasdasdasd'
                },
                {
                name:'Otras cosas',
                _id:'1231232132131'
                }],
            services:[
                {
                name:'Mesas largas',
                _id:'asdasdasdasd'
                },
                {
                name:'Mesas de Jardín',
                _id:'1231232132131'
                }],
            categoryId:'',
            serviceId:'',
            description:''
        }
    },
    methods:{
        async onSubmit(){
        //  const needId= await api.createNeed({
        //     category:this.categoryId,
        //     service:this.serviceId,
        //     description:this.description
        // })
        this.$store.commit('event/setNewNeeds', {
            //   needId:needId._id
            _id:'123444'
          })
          this.$emit('newNeed', {
                categoryId:this.categoryId,
                serviceId:this.serviceId,
                description:this.description,
                _id:'asdasdasas',
            })
            this.categoryId=''
            this.serviceId=''
            this.description=''
        }
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