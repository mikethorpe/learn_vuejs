<template>
    <div>
        <input type="text" v-model="itemText">
        <button v-on:click="onAddClick">Add item</button>
    </div>
</template>

<script>
export default {
    name: 'AddToDoForm',
    data:() => {
        return {
            itemText: ''
        }
    },
    methods: {
        onAddClick() {
            this.$emit('add-clicked', this.itemText);
            this.itemText = '';
        }
        
    }
}
</script>