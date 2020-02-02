import { linkTo } from '@storybook/addon-links';

import Vue from 'vue';
import ToDoItem from './ToDoItem.vue';

export default { title: 'ToDoItem' };

const notDoneItem = {
    id: 1,
    itemText: 'Go buy cucumbers',
    done: false
}

export const NotDone = () => ({
    components: { ToDoItem },
    template: `<ToDoItem v-bind:item="item"/>`,
    data() {
        return {
            item: notDoneItem,
        }
    },
});