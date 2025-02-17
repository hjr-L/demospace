<template>
    <div>
        <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <TodoItem :todo="todo" :index="index" @changeTodo="changeTodo"/>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TodoItem from './TodoItem.vue'
const newTodo = ref('')
const todos = ref([])

onMounted(() => {
    if (localStorage.getItem('todos')) {
        todos.value = JSON.parse(localStorage.getItem('todos'))
    }
})

const addTodo = () => {
    if (newTodo.value.trim() !== '') {
        todos.value.push({
            text: newTodo.value,
            status: false
        })
        newTodo.value = ''
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }
}

/**
 * 
 * @param type 类型 update delete
 * @param index 
 * @param newValue 
 */

function changeTodo(type, index, newValue) {
    switch (type) {
        case 'update':
            todos.value[index] = newValue
            break;
        case 'delete':
            todos.value.splice(index, 1)
            break;
        default:
            break;
    }
    localStorage.setItem('todos', JSON.stringify(todos.value))
}
</script>

<style scoped>
h1 {
    font-family: Arial, sans-serif;
}

input {
    margin-bottom: 10px;
    padding: 5px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 5px 0;
}

button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px;
    cursor: pointer;
}
</style>