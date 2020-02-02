<template>
<div>
    <h3>To do list:</h3>
    <ul>
        <TodoItem v-for="item in toDoItems" v-bind:key="item.id" v-bind:item="item" />
    </ul>
    <AddToDoForm v-on:add-clicked="addClicked"/>
</div>
</template>

<script>
import TodoItem from './ToDoItem';
import AddToDoForm from './AddToDoForm';
export default {
    name: 'ToDoList',
    components: { 
        TodoItem,
        AddToDoForm
    },
    props: {
        toDoItems: Array
    },
    methods: {      
        addClicked(itemText) {
            console.log('caught');
            this.$emit('add-clicked', itemText);
        }
    }
}
</script>