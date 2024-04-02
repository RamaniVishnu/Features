<template>
<div>
<div v-for="list in listValues">
<li v-if="list"> {{ list.name}}</li>
</div>
<input placeholder="enter car" @input="fetchValues" v-model="searchQuery"/>
<div v-if="searchQuery.length > 1" v-for="colors in inputColors">
  <table v-if="colors">
    <tr>
       <th>Name</th>
      <th>Vehicle</th>
       <th>Date</th>
        <th>color</th>
    </tr>
    <tr>
      <td>{{ colors.name }}</td>
      <td>{{ colors.type }}</td>
      <td>{{ colors.date }}</td>
      <td>{{ colors.color }}</td>

    </tr>
  </table>
</div>
</div>
</template>

<script>
export default {
  data(){
    return {
      searchQuery: '',
      listValues:[
      {
        name:'car',
        type:"vehicle",
        date: "2023-25-0900.05.60",
        color:'red'
      },
      {
        name:'bus',
        type:"vehicle",
        date: "2023-26-0900.05.60",
        color: 'yellow'
      },
      {
        name:'carvan',
        type:"vehicle",
        date: "2023-25-0900.05.60 ",
        color: 'orange'
      },
      null],
      inputColors: []
    }
  },
  methods:{
    fetchValues(){
      console.log("called....",this.searchQuery); 
      this.inputColors = this.listValues.filter((elem)=>{
        if(elem) {
          return elem.color.includes(this.searchQuery.toLowerCase())
        }
        });
     console.log("called input....",this.inputColors)
    }
  }
}
</script>

<style>
table,th,td{
  border: 1px solid black;
}
</style>
