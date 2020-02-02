<template>
    <div>
        <div v-for="item in toDoItems" v-bind:key="item.id">
            <TodoItem v-bind:itemText="item"/>
        </div>
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