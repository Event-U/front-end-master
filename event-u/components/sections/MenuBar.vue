<template>
  <div class='page-enter-active navbar'>
      <h1>
          Spots
      </h1>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar{
    background-color: #FFFF00;
}

.page-enter-active{
    animation: comein .5s ease-in ;
}

@keyframes comein {
    20%{
        opacity: .3;
        padding:30%;
    }
    50%{
        opacity: .7;
        padding:20%;
    }
    100%{
        opacity: 1;
        padding:10%;
    }
    }
</style>