<template>
  <div class="hello">
    <p>Vue sandbox</p>
  <ToDoList v-bind:toDoItems="toDoItems"/>
  </div>
</template>

<script>
import ToDoList from './ToDoList'
export default {
  name: 'HelloWorld',
  components : {
    ToDoList
   },
  data: () => {
    return {
      toDoItems: [
          { id: 1, itemText: 'To do 1', done: false },
          { id: 2, itemText: 'To do 2', done: true }
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
