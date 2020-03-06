<template>
  <section class="container">
    <div>
      <menu-bar/>
    </div>
  </section>
</template>

<script>
import MenuBar from '@/components/sections/MenuBar.vue'
export default {
  components: {
    MenuBar
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Futura";
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #000000;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

