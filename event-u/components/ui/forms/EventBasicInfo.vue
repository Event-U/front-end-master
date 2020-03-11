<template>
  <div class="mt-3  my-element">
        <h1 class="title animated fadeIn ">¡Comencemos con tu nuevo evento!</h1>
    <div class="form-group animated fadeInDown">
        <div class="form-group col-md-5">
            <label for="eventName">Nombre de tu evento</label>
            <input 
                @input="setActiveEvent" 
                v-model="name" 
                type="text" 
                class="form-control" 
                id="eventName" 
            >
        </div>
        <div class="form-group col-md-5 animated fadeInUp delay-1s">
            <label for="exampleFormControlTextarea1">
                Descripción de tu evento
            </label>
                <textarea 
                    @input="setActiveEvent" 
                    v-model="description" 
                    class="form-control" 
                    id="exampleFormControlTextarea1"  
                />
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    name:'EventBasicInfo',
    data(){
        return{
            name:'',
            description:''
        }
    },
    methods:{
        setActiveEvent(){
          this.$emit('update', {
              name:this.name,
              description:this.description
          })
    }
}}
</script>

<style lang="scss" scoped>
label{
    @extend .h4-font;
}
.form-control{
    transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
    font-size: 1em;
}
.form-control:focus{
    border-color:$alpha;
    box-shadow: 0px 0px 10px #ffff0078;
    transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
    @extend .h5-font;
    font-size: 1.3em;
}
.form-group{
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    text-align:center;
}
h1{
    @extend .h2-font;
    font-size:2em;
    font-weight: 200;
    text-align:center;
}
.form-row{
    margin:0;
    justify-content:center;
}
</style>