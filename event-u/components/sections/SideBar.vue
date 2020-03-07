<template>
<div class="main-nav">
      <ul class="nav">
       
        <li>
            <nuxt-link to='/'>
                <i class="fas fa-clipboard-check"></i>
                Proveedores
            </nuxt-link>
        </li>
        <li>
             <nuxt-link to='/organizador/myevents'>
                 <i class="fab fa-buffer"></i>
                Organizadores
            </nuxt-link>
        </li>
        <img src="@/assets/logo/logo.png" alt="" srcset="">
      </ul>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
img{
    max-width:7%;
    transform: rotate(90deg);
}
.main-nav {
  width:100vh;    
  height:69px;
  position:fixed;
  background: #eeeeee;
  transform-origin: left top;
  transform:rotate(-90deg) translateX(-100%);
}
.nav{
    justify-content: flex-end;
    padding-top:1.3%;
}
a{
  color:#333333;
}
ul.nav li:nth-last-child(2){
    border-left: #999999 solid 1px;
    padding-left:4.5%;
    padding-right:3.5%;
}
ul.nav li {    
  margin-right:20px;
  float:left;
  height:100%;
  line-height:45px;
  font-size:1.5em;
  @extend .h3-font;

}
</style>