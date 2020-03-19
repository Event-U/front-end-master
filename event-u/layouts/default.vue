<template>
  <div class="classic-layout">
    <side-bar/>
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
    name: 'default',
    components:{
        MenuBar,
        SideBar
    },
    mounted(){
      
    }
}
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.main-content{
  margin-left:5%;
}
</style>

