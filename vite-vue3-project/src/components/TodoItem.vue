<template>
    <div class="item" v-if="!edit">
        <div :class="{status: true, completed: props.todo.status}" @click="changeStatus"></div>
        <span @click="editTodo">{{ props.todo.text }}</span>
        <span class="remove" @click.prevent="delTodo">X</span>
    </div>
    <div class="item" v-else>
        <input type="text" v-model="copyTodo" @blur="edit = false" @keyup.enter="submitEdit" />
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const props= defineProps({
    todo: Object,
    index: Number
})
const emit = defineEmits(['changeTodo'])

const edit = ref(false)
const copyTodo = ref('')

function delTodo(){
    emit('changeTodo', 'delete', props.index)
}
function editTodo() {
    copyTodo.value = props.todo.text
    edit.value = true
}
function submitEdit(){
    emit('changeTodo', 'update', props.index, {...props.todo, text: copyTodo.value})
    edit.value = false
}

function changeStatus(){
    emit('changeTodo', 'update', props.index, {...props.todo, status: !props.todo.status})
}

</script>

<style lang="less" scoped>
.item{
    height: 50px;
    min-width: 200px;
    .flex-container(center, space-between);
    .status{
        width: 20px;
        height: 20px;
        border: 1px solid #000;
        border-radius: 50%;
        &.completed{
            border-color:  @successColor;
            background: @successColor;
        }
    }
    .remove{
        color: black;
        padding: 0 5px;
        line-height: 50px;
        cursor: pointer;
        font-size: 12px;
        // transition: font-size 0.3s;
        &:hover{
            font-size: 15px;
            color: @errorColor;
        }
    }
}
</style>