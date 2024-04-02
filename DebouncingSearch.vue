<template>
<div>
<input placeholder="enter car" @input="debounceFetch" v-model="searchQuery"/>
<div v-if="searchQuery.length > 0" v-for="colors in inputColors">
  <li v-if="colors">{{ colors }}</li>
</div>
</div>
</template>

<script>
export default {
  data(){
    return {
      searchQuery: '',
      colorsList:['red','black','yellow','orange','blue','brown','white'],
      inputColors: [],
      debounceTimer: null
    }
  },
  methods:{
    debounceFetch(){
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(()=>this.fetchValues(),300);
      
    },
    fetchValues(){
      console.log("called....",this.searchQuery)
      this.inputColors = this.colorsList.filter((elem)=>elem.includes(this.searchQuery.toLowerCase()))
    }
  }
}
</script>
