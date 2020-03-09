<template>
<form class='mt-3'>
    <h3 class="mb-3">Agregar necesidad</h3>
  <div class="row">
    <div class="input-group mb-3 col">
        <div class="input-group-prepend">
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
        <div class="input-group-prepend">
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
  <div class="input-group">
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
        <button
        class="btn btn-iconed mt-3" 
        role="button"
            @click.prevent="onSubmit"
        >
            <i class="fas fa-angle-right"></i> <span class="spn">Agregar necesidad</span>
    </button>
</form>
</template>

<script>
import OptionInput from '@/components/ui/forms/OptionInput.vue'
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
        onSubmit(){
          this.$emit('newNeed', {
                categoryId:this.categoryId,
                serviceId:this.serviceId,
                description:this.description,
                _id:'asdasdasas'
            })
            this.categoryId=''
            this.serviceId=''
            this.description=''
        }
    }
}
</script>

<style lang='scss' scoped>
h3{
    @extend .h2-font;
    font-weight: 100;
    font-size: 1.5em;
}
button{
    @extend .btn-eventu;
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