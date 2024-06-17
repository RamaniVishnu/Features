<script>
export default {
  data(){
    return {
      editIndex: null,
      taskInput: '',
      editValue: '',
      taskList: []

    };
  },
  components:{
    
  },
  methods:{
    addTask(){
      this.taskList.push(this.taskInput);
      this.taskInput='';

    },
    removeTask(indexVal){
      this.taskList = this.taskList.filter((elem,index)=> index !== indexVal)
    },
    updateTask(indexVal){
      let tasks = [...this.taskList];
      tasks[indexVal] = this.editValue;
      this.taskList=tasks;
      this.editIndex =null;
      this.editValue = '';
    }
  },
  computed:{

  },
  watch:{
    
  }
}
</script>

<template>
  <div>
    <input v-model ="taskInput" /><button @click="addTask">add</button>
<div v-for="(task,index) in taskList">
    <div v-if="index === editIndex">
    <li><input v-model="editValue" />
    <button @click="updateTask(index)">update</button>
    <button @click="editIndex = null">ignore</button>
    </li>
    </div>
    <div v-else>
      <li>
        {{ task}}
        <button @click="editIndex = index">edit</button>
        <button @click="removeTask(index)">remove</button>
      </li>
    </div>

 
</div>
  </div>
</template>

<style>
</style>
