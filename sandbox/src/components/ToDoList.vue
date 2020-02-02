<template>
<div>
    <h3>To do list:</h3>
    <ul>
        <TodoItem v-for="item in toDoItems" v-bind:key="item.id" v-bind:item="item"/>
    </ul>

</div>
</template>

<script>
import TodoItem from './ToDoItem';
export default {
    name: 'ToDoList',
    components: { 
        TodoItem 
    },
    props: {
        toDoItems: Array
    }
}
</script>