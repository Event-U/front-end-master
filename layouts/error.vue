<template>
  <div class="container mt-3 justify-content-center align-center content-center">
    <error500 v-if="error.statusCode === 500" />
    <error404 v-if="error.statusCode === 404" />
  </div>
</template>

<script>
export default {
  name: 'error',

  head() {
    return {
      title: `Error ${this.error.statusCode} 👻`,
    };
  },

  components: {
    error500: () =>
      import(
        /* webpackChunkName: "500Error" */ '@/components/sections/errors/500.vue'
      ),
    error404: () =>
      import(
        /* webpackChunkName: "404Error" */ '@/components/sections/errors/404.vue'
      ),
  },

  layout: 'default', // you can set a custom layout for the error page

  props: ['error'],
};
</script>