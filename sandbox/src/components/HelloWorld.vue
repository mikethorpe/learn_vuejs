<template>
  <div class="hello">
    <p>Vue sandbox</p>
  <ToDoList v-bind:toDoItems="toDoItems" v-on:add-clicked="addClicked"/>
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
  },
  methods: {
    addClicked(itemText) {
      this.toDoItems = [ ...this.toDoItems, { itemText: itemText, done: false}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
