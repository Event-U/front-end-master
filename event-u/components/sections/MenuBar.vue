<template>
  <div class='page-enter-active navbar d-flex justify-content-between'>
    <app-logo
        class='logo-menu col-4'
    /> 
    <div class="section-title  col-4">
        <h1
        >
         {{activePage}}
        </h1>
    </div>
    <div class="icons-navbar col-2">
        <i class="fas fa-search"></i>
        <i class="far fa-bell"></i>
        <i class="fas fa-cog"></i>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import AppLogo from '../AppLogo.vue'
export default {
    name: 'MenuBar',
    components:{
        AppLogo,
        mapState
    },
    data(){
        return{
            // name:getActivePage(),
        }
    },
    computed: mapState([
        'activePage'
        ])
    ,
}
</script>

<style lang="scss" scoped>
.navbar{
    background-color: $alpha;
    padding:1% 0%;
    border-radius:0px 0px 16px 16px;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.27);
}
.section-title{
    text-align:center;
}
.logo-menu{
    max-width: 15%;
}
.icons-navbar{
    text-align:right;
}
.icons-navbar >*{
    padding-right: 13%;
    font-size: 1.5em;
}
h1{
     @extend .h1-font;
     font-size:2.3em;
     color:#333333;
}
</style>