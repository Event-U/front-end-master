<template>
<div class="main-nav">
      <ul class="nav fadeInLeft animated dropdown">
        <li
            class="dropdown-toggle d-pr  animated fadeIn"
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
            id="dropdownMenuProvider"
            @mouseover="hoverProv=true"
            @mouseout="hoverProv=false"
        >
        <div 
          class="dropdown-menu" 
          aria-labelledby="dropdownMenuProvider"
          :class="{show: hoverProv}"
        >
          <nuxt-link to="/proveedor/events">
            <a class="dropdown-item">
             Eventos
            </a>
          </nuxt-link>
          <nuxt-link to="/proveedor/myservices">
            <a class="dropdown-item">
             Mis servicios
            </a>
          </nuxt-link>
          <nuxt-link to="/proveedor/allquotations">
            <a class="dropdown-item">
             Mis cotizaciones
            </a>
          </nuxt-link>
        </div>
            <nuxt-link 
              to='/proveedor/events'
            >
              <i class="fas fa-clipboard-check"/>
              Proveedores
            </nuxt-link>
        </li>
        <li
          @mouseover="hoverOrg=true"
          @mouseout="hoverOrg=false"
          class="dropdown-toggle d-or animated fadeIn"
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false"
          id="dropdownMenuOrganizer"
        >
          <div 
            class="dropdown-menu " 
            aria-labelledby="dropdownMenuOrganizer"
            :class="{show: hoverOrg}"
          >
            <nuxt-link to="/organizador/myevents">
              <a class="dropdown-item">
                Mis Eventos
              </a>
            </nuxt-link>
            <nuxt-link to="/organizador/newevent">
                <a class="dropdown-item">
                  Nuevo Evento
                </a>
            </nuxt-link>
            <nuxt-link to="/organizador/allquotations">
              <a class="dropdown-item">
                Cotizaciones
              </a>
            </nuxt-link>
          </div>
        <nuxt-link 
          to='/organizador/myevents'
        >
          <i class="fab fa-buffer"/>
          Organizadores
         </nuxt-link>
        </li>
          <img src="@/assets/logo/logo.png" alt="Event-U logo" srcset="">
      </ul>
 </div>
</template>

<script>
export default {
  name:'SideBar', 
  data(){
    return{
      hoverProv:false,
      hoverOrg:false,
    }
  }
}
</script>

<style scoped lang="scss">
.dropdown-toggle::after {
 display:none;
}
.d-or{
  transition:.5s ease-out;
  .show{
      position: absolute;
      will-change: transform;
      top: -35%;
      left: 33%;
      /* transform: translate3d(9px, 171px, 0px); */
      transform: rotate(90deg) translate3d(40%, -120%, 0px)!important;
      z-index: 1000!important;
      @extend .h3-font;
      font-size:.8em;
  }
}
.d-pr{
  transition:.5s ease-out;
  .show{
      position: absolute;
      will-change: transform;
      top: -15px!important;
      left: -51px;
      /* transform: translate3d(9px, 171px, 0px); */
      transform: rotate(90deg) translate3d(40%, -120%, 0px)!important;
      z-index: 1000!important;
      @extend .h3-font;
      font-size:.8em;
  }
}

.dropdown-item:hover{
  background: #ffff00!important;
  transition:.2s ease-out;
  @extend .h3-font
}

img{
    max-width:7%;
    transform: rotate(90deg);
}
.main-nav {
  z-index:1;
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