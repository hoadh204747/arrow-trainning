<script setup>
    import {ref} from 'vue'
    import TodoItem from '../components/TodoItem.vue'

    const newTodo = ref('')
    let todoId = 0
    const todos = ref([

    ])

    function addNewTodo() {
        todos.value.push({
            id: todoId,
            name: newTodo.value
        }),
        newTodo.value = '';
        todoId++;
    }
</script>

<template>
    <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
            v-model="newTodo"
            id="new-todo"
            placeholder="new todo ..."
        >
        <button>Add</button>
    </form>
    <ul>
        <TodoItem
            v-for="(todo, index) in todos"
            :key="todo.id"
            :name="todo.name"
            :id="todo.id"
            @remove="todos.splice(index, 1)"
        ></TodoItem>
    </ul>
</template>

<style lang="scss" scoped>

</style>