<template>
  <div class="error500 row">
      <div class="col-8 align-center">
        <img src="@/assets/error/SVG/500.svg" alt="">
      </div>
      <div class="col-4 mt-3">
        <h1>
            Estamos pasando por alguna dificultad técnica.
            ¿Por qué no visitar otra sección?
        </h1>
            <nuxt-link to="/">
                <button class="mt-3">
                    Ir al inicio
                </button>
            </nuxt-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'error500',
  data(){
        return{
            name:'Error 500 🤔'
        }
    },
    mounted(){
     this.$store.commit('change',this.name)
    }
}
</script>

<style lang='scss' scoped>
button{
    @extend .btn-eventu;
    padding: 2% 10%;
    color: #333333;
    font-size:2em;
     font-weight: 300;
    @extend .h1-font;
}
h1{
    @extend .h3-font;
    font-weight: 500;
    font-size:1.8em;
}
.error500{
    justify-content: center;
    align-items: center;
}
</style>