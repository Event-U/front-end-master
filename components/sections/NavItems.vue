<template>
  <div class="navbar-collapse mr-lg-3">
    <ul class="navbar-nav align-items-center">
      <li
        @click="openMenu('planificador')"
        class="nav-item"
        @mouseover="hoverItem('planificador')"
        :class="{
					activeItem: isPlanner,
				}"
      >
        <i class="fas fa-calendar-alt" />
        <span class="item-name" v-if="hoverPlanificador">Planificador</span>
      </li>
      <ul
        class="submenu submenu-items text-right"
        v-if="collapsePlanificador"
        @mouseleave="closeCollapse"
      >
        <li>
          <nuxt-link to="/app/planificador/calendario">Calendario</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/app/planificador/tablero">Tableros</nuxt-link>
        </li>
      </ul>
      <li
        @mouseover="hoverItem('proveedor')"
        @click="openMenu('proveedor')"
        class="nav-item"
        :class="{
					activeItem: isProvider,
				}"
      >
        <i class="fas fa-layer-group" />
        <span class="item-name" v-if="hoverProveedor">Proveedor</span>
      </li>
      <ul
        class="submenu submenu-items text-right"
        v-if="collapseProveedor"
        @mouseleave="closeCollapse"
      >
        <li>
          <nuxt-link to="/app/proveedor/eventos">Eventos</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/app/proveedor/mis-servicios">Mis servicios</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/app/proveedor/mis-cotizaciones">Mis cotizaciones</nuxt-link>
        </li>
      </ul>
      <li
        @click="openMenu('organizador')"
        class="nav-item aling-stretch align-center"
        @mouseover="hoverItem('organizador')"
        :class="{
					activeItem: isOrganizador,
				}"
      >
        <i class="fas fa-boxes" />
        <span class="item-name" v-if="hoverOrganizador">Organizador</span>
      </li>
      <ul
        @mouseleave="closeCollapse"
        class="submenu submenu-items text-right"
        v-if="collapseOrganizador"
      >
        <li>
          <nuxt-link to="/app/organizador/mis-eventos">Mis eventos</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/app/organizador/nuevo-evento">Nuevo evento</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/app/organizador/mis-cotizaciones">Mis cotizaciones</nuxt-link>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavigationItem',

  data() {
    return {
      hoverOrganizador: false,
      hoverProveedor: false,
      hoverPlanificador: false,

      collapseOrganizador: false,
      collapseProveedor: false,
      collapsePlanificador: false,
    };
  },

  computed: {
    isOrganizador() {
      return this.$route.path.includes('organizador');
    },

    isProvider() {
      return this.$route.path.includes('proveedor');
    },

    isPlanner() {
      return this.$route.path.includes('planificador');
    },
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    closeCollapse() {
      this.collapseOrganizador = false;
      this.collapseProveedor = false;
      this.collapsePlanificador = false;
    },

    unHoverAll() {
      this.hoverOrganizador = false;
      this.hoverProveedor = false;
      this.hoverPlanificador = false;
    },

    closeAll() {
      this.collapseOrganizador = false;
      this.collapseProveedor = false;
      this.collapsePlanificador = false;

      this.hoverOrganizador = false;
      this.hoverProveedor = false;
      this.hoverPlanificador = false;
    },

    openMenu(target) {
      this.closeCollapse();
      switch (target) {
        case 'organizador':
          this.collapseOrganizador = true;
          break;

        case 'planificador':
          this.collapsePlanificador = true;
          break;

        case 'proveedor':
          this.collapseProveedor = true;
          break;

        default:
          break;
      }
    },

    hoverItem(target) {
      this.unHoverAll();
      switch (target) {
        case 'organizador':
          this.hoverOrganizador = true;
          break;

        case 'planificador':
          this.hoverPlanificador = true;
          break;

        case 'proveedor':
          this.hoverProveedor = true;
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.activeItem {
  i {
    font-size: 1.9em;
    color: black;
  }
  span {
    text-decoration: underline;
  }
}

:link {
  color: #333;
}

.submenu {
  z-index: -1;
  background-color: #eeeeee;
  top: 97%;
  border-radius: 0px 0px 16px 16px;
  position: absolute;
  margin: 0;
  animation: goUp 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.item-name {
  animation: goLeft 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes goLeft {
  0% {
    opacity: 0.3;
    font-size: 0%;
  }
  100% {
    opacity: 1;
    font-size: 100%;
  }
}

@keyframes goUp {
  0% {
    opacity: 0.3;
    top: 50%;
  }
  100% {
    opacity: 1;
  }
}

.submenu-items {
  padding: 1em;
  margin-block-end: 0 !important;
}

.fa-arrow-left {
  font-size: 0.8em;
}

.fa-arrow-left:hover {
  cursor: pointer;
}

i {
  color: #333;
  font-size: 1.5em;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s;
}

.navbar-collapse {
  flex-basis: 30%;
  justify-content: flex-end;
}

span,
li,
ul {
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
  list-style-type: none;
  vertical-align: text-bottom;
}

.icons-navbar {
  text-align: right;
}
li {
  padding-right: 1em;
}
</style>
