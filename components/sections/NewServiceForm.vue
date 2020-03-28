<template>
<form class="m-3 text-center">
    <h1
        class="text-center"
    >
        Crea un nuevo servicio
    </h1>
    <div class="form-group">
        <label for="newServiceName">Nuevo servicio</label>
        <input 
            class="form-control" 
            id="newServiceName" 
            aria-describedby="emailHelp" 
            v-model="name"
        >
        <small id="emailHelp" class="form-text text-muted">Recuerda ser lo más conciso posible.</small>
    </div>
    <div class="form-group">
        <select
            v-model="category"
            class="custom-select" 
            id="inputGroupSelect0"
        >
            <option selected>Elige una categoría...</option>
                <option-input
                    v-for="option in categories"
                    :key='option._id'
                    v-bind="option"
                /> 
        </select>
    </div>
    <div class="form-group">
        <select
            v-model="measurementUnit"
            class="custom-select" 
            id="inputGroupSelect01"
        >
            <option selected>Precio por unidad</option>
            <option value="Metro">Metro</option>
            <option value="Persona">Persona</option>
            <option value="Unidad">Unidad</option>
            <option value="Hora">Hora</option>
        </select>
    </div>
     <div class="form-group">
        <label for="newServiceName">Precio por medida</label>
         <div class="input-group-prepend">
          <div class="input-group-text">$</div>
            <input 
                class="form-control" 
                aria-describedby="emailHelp" 
                v-model="unitPrice"
            >
        </div>
    </div>
     <div class="form-group">
        <label for="newServiceName">
            Url de tu imagen
        </label>
        <input 
            class="form-control" 
            aria-describedby="emailHelp" 
            v-model="image"
        >
    </div>
    <div class="form-group">
        <label for="description">Descripción</label>
        <textarea 
            type="password" 
            class="form-control" 
            id="description" 
            v-model="description"
        />
    </div>
    <button 
        type="submit" 
        class="btn btn-primary"
        @click.prevent="postNewService"
    >
        Subir servicio
    </button>
</form>
</template>

<script>
import {mapMutations,mapState} from 'vuex'
import OptionInput from '@/components/ui/forms/OptionInput.vue'

export default {
    name:'NewServiceForm',
    components:{
        OptionInput
    },
    data(){
        return{
            name:'',
            category:'', 
            measurementUnit:'',
            unitPrice:0,
            image:'',
            description:'',
            units:[
                'Metros',
                'Hora', 
                'Unidad', 
                'Persona', 

            ]
        }
    },
    methods: {
      postNewService: function(){
         this.$store.dispatch('service/postService', {
            name:this.name,
            category:this.category, 
            measurementUnit:this.measurementUnit,
            unitPrice:this.unitPrice,
            image:this.image,
            description:this.description,
         })
       }
    },created() {
        this.$store.dispatch('service/fetchCategories')
  },computed:{
      ...mapState('service',['categories']),
      ...mapState('activeUser')
      }
}
</script>

<style lang='scss' scoped>
label{
    @extend .h4-font;
}
.btn{
    @extend .h2-font;
    background-color: $complementary;
    font-weight: 400;
    font-size:1.5em;
    text-align:center;
    align-self:center;
    transition:.4s ease-in-out;
}
.btn:hover{
    box-shadow:5px 3px 11px #00000059;
    transition:.3s ease-in;
    // font-size:1.3em;
}
h1{
    @extend .h1-font;

}
.modal-content{
    border-radius: 8px;
    box-shadow: 7px 7px 7px 0px #ffffff4d;
}
</style>