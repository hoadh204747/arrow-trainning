<script setup>
  import { useTaskStore } from './stores/TaskStore';
  import TaskDetail from './components/TaskDetail.vue'
  import { ref } from 'vue';
  import TaskForm from './components/TaskForm.vue';

  const taskStore = useTaskStore()
  const filter = ref('all')
  
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ taskStore.totalCount }} tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetail :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ taskStore.favsCount }} fav tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetail :task="task" />
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
