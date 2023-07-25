<template>
  <div id="app">
    <StarRating />
  </div>
</template>

<script>
import StarRating from './components/StarRating.vue'

export default {
  name: 'App',
  components: {
    StarRating
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
