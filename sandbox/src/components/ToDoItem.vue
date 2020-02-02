<template>
    <li v-bind:class="{'itemIsDone': item.done}">
        <span v-if="!this.editingItemText" v-on:click="onItemTextClick">{{item.itemText}}</span>
        <span v-else> 
            <input type="text" v-model="item.itemText"/>
            <button v-on:click="onDoneUpdtingClicked">Done updating</button>
        </span>
        <input type="checkbox" v-bind:checked="item.done" v-on:click="onCheckboxClick">
    </li>
</template>

<script>
export default {
    name: 'ToDoItem',
    props: {
        item: { id: Number, itemText: String, done: Boolean},
    },
    data: () => {
        return {
            editingItemText: false
        }
    },
    watch: {
        item() {
            console.log(this.item.done);
        }
    },
    computed: {
        // style() {
        //     return `color: ${this.item.done ? 'green' : 'red'}`;
        // }
    },
    methods : {
        onItemTextClick() {
            this.editingItemText = !this.editingItemText;
        },
        onCheckboxClick() {
            this.item.done = !this.item.done;
        },
        onDoneUpdtingClicked() {
            this.editingItemText = false;
        }
    }
}
</script>

<style scoped>
    li {
        border: solid;
        max-width: 500px;
        margin: 10px;
        color: red;
    }

    .itemIsDone {
        color: green
    }
</style>