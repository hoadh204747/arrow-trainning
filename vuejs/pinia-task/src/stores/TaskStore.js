import { defineStore } from "pinia";

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            { id: 1, title: "buy some milk", isFav: false },
            { id: 2, title: "play Gloomhaven", isFav: true }
        ],
        name: 'Mario'
    }),
    getters: {
        favs: (state) => state.tasks.filter(t => t.isFav),
        favsCount: (state) => state.tasks.filter(t => t.isFav).length,
        totalCount: (state) => state.tasks.length
    },
    actions: {
        addTask(task){
            this.tasks.push(task)
        },
        removeTask(id){
            this.tasks = this.tasks.filter(t => t.id !== id)
        },
        toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})