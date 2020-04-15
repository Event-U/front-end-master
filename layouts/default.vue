<template>
  <div class="classic-layout">
    <side-bar
    class="side-bar"/>
    <menu-bar/>
    <nuxt
      class='main-content'
    />
  </div>
</template>
<script>
import MenuBar from '../components/sections/MenuBar.vue'
import SideBar from '@/components/sections/SideBar.vue'
export default {
    head() {
        return {
          titleTemplate: '%s | Event-u',
          meta: [
              {
                  hid: 'description',
                  name: 'description',
                  content: 'Comienza a utilizar Event-U y comienza a generar en el mercado de eventos'
              }
          ]
        }
    },
    name: 'default',
    components:{
        MenuBar,
        SideBar
    },
}
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.main-content{
  margin-left:5%;
  z-index:0;
}
.side-bar{
  z-index: 2;
}
</style>

