<template>
  <div class="container d-flex flex-column">
    <div class="col">
      <h1
        class="text-center"
      >
        ¡Bienvenido a tu planner Irving!
      </h1>
      <h2
        class="text-center"
      >
        ¿Qué quieres hacer hoy?
      </h2>
    </div>
  <div 
    class="text-center mb-3 mt-3"
  >
    <button class="btn btn-eventu mr-3 ">
      Ir a mi calendario
    </button>
    <button class="btn btn-eventu">
      Ir a mi planificador
    </button>
  </div>
  </div>
</template>

<script>
export default {
    name:'Planner'
}
</script>

<style lang='scss' scoped>
.btn{
  @extend .h3-font;
  font-size:1em;
}
h1{
  @extend .h1-font;
}
h2{
  @extend .h2-font;
  font-weight: 400;
}
</style>