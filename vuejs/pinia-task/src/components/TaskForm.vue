<template>
        <form @submit.prevent="handleSubmit">
            <input
                type="text"
                v-model="newTask"
            >
            <button type="submit">Add</button>
        </form>
</template>

<script setup>
    import { useTaskStore } from '../stores/TaskStore';
    import { ref } from 'vue';
    const taskStore = useTaskStore()

    const newTask = ref('')

    const handleSubmit = () => {
        if(newTask.value.length){
            taskStore.addTask({
                title: newTask.value,
                isFav:false,
                id: Math.floor(Math.random() * 10000)
            })
            newTask.value = ''
        }
    }
</script>

<style lang="scss" scoped>

</style>