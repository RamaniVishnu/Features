<template>
  <div>
    <button @click="increment">start</button>
    <button @click="pauseVal">pause</button>
    <button @click="resetCount">Reset</button>
    Timer: {{ this.count }}
  </div>
</template>

<script>
export default {
data(){
  return{
    count: 0,
    storeVal: 0,
    clearTime: null
  }
},
methods:{
  increment(){
    this.clearTime =setInterval(()=>{
      console.log('increment....');
      this.count++},1000);
  },
  pauseVal(){
    this.storeVal = this.count;
    clearInterval(this.clearTime);
  },
  resetCount(){
    this.count = 0;
  }

}
}
</script>

<style>
</style>
