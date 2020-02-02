<template>
    <li>{{itemText}}</li>
</template>

<script>
export default {
    name: 'ToDoItem',
    props: ['itemText']
}
</script>