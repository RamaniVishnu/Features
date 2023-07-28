<template>
  <div id="app">
    <BadgeComp />
  </div>
</template>

<script>
import BadgeComp from './components/BadgeComp.vue'

export default {
  name: 'App',
  components: {
    BadgeComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
