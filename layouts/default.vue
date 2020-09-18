<template>
  <div class="classic-layout">
    <menu-bar />
    <nuxt :key="$route.path" class="main-content" />
  </div>
</template>
<script>
import MenuBar from '../components/sections/MenuBar.vue';
import SideBar from '@/components/sections/SideBar.vue';
export default {
  name: 'default',
  components: {
    MenuBar,
    SideBar,
  },

  head() {
    return {
      titleTemplate: '%s | Event-u',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Comienza a utilizar Event-U y comienza a generar en el mercado de eventos',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.main-content {
  z-index: 0;
  padding-top: 3em;
  @media screen and (min-width: 768px) {
    padding-top: 3.4em;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 5em;
  }
}
</style>
