<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i @click="taskStore.removeTask(task.id)" class="material-icons">delete</i>
      <i @click="taskStore.toggleFav(task.id)" class="material-icons" :class="{active: task.isFav}">favorite</i>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore';

    defineProps(['task'])
    const taskStore = useTaskStore()

</script>

<style lang="scss" scoped>

</style>