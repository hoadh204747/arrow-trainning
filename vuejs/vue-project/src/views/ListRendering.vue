<script setup>
    import {computed, ref, watch,  onMounted} from 'vue'
    import TodoItem from '../components/TodoItem.vue'

    const feedbackText=ref('')
    const newTodo = ref('')
    let todoId = 0
    const todos = ref([])
    const inp = ref(null)

    onMounted(() => {
        inp.value.focus()
    })

    watch(newTodo,  (value) => {
        if(value === ''){
            feedbackText.value = ''
        } else if(!value.includes('@'))  {
            feedbackText.value = 'Please enter a valid email'
        } else {
            feedbackText.value = 'okkkkkk'
        }
    })

    function addNewTodo() {
        if (newTodo.value.includes('@')) {
        todos.value.push({
            id: todoId,
            name: newTodo.value
        })
        newTodo.value = ''
        todoId++
        feedbackText.value = ''
        }
    }
    const computedTodo = computed(() => {
        return todos.value.length > 0 ? `You have ${todos.value.length} email` : 'No email'
    })


</script>

<template>
    <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add email</label>
        <input
            v-model="newTodo"
            id="new-todo"
            placeholder="email..."
            ref="inp"
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
    <span>{{ feedbackText }}</span>
    <span>{{ computedTodo }}</span>
</template> 

<style lang="scss" scoped>

</style>