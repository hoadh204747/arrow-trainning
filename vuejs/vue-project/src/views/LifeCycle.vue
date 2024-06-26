<template>
    <div>
        <h1>Life Cycle</h1>
        <span>{{ text }}</span>
        <p ref="pEl" id="pEl">try to access this text from the 'beforeMount' hook</p>
        <input v-model="text" placeholder="Type something...">

    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '...',
            newTodo: '',
            todos: [],
            warning: ''
        }
    },

    // beforeCreate(){
    //     this.text = 'initial text';
    //     console.log('beforeCreate')
    // }

    // created(){
    //     this.text = 'initial text';
    //     console.log('created:...')
    // }

    // beforeMount(){
    //     console.log("beforeMount: This is just before the component is mounted.");
    //     this.$refs.pEl.innerHTML = 'Helllo'
    // }

    // mounted(){
    //     console.log("mounted...");
    //     this.$refs.abc.innerHTML = 'Helllo'
    // }

    // beforeUpdate() {
    //     console.log("beforeUpdate: Component is about to be updated.");
    //     console.log("Current text: " + this.text);
    // },
    // updated() {
    //     console.log("updated: Component has been updated.");
    //     console.log("Updated text: " + this.text);
    // }

    // beforeUpdate() {
    //     console.log("beforeUpdate: Checking todo length...");
    //     this.warning = '';
    //     for (let todo of this.todos) {
    //         if (todo.text.length > 20) {
    //             this.warning = 'Warning: Some tasks are too long!';
    //             break;
    //         }
    //     }
    // },

    // methods: {
    //     addTodo() {
    //         if (this.newTodo.trim() !== '') {
    //             this.todos.push({ text: this.newTodo.trim() });
    //             this.newTodo = '';
    //         }
    //     },
    //     removeTodo(index) {
    //         this.todos.splice(index, 1);
    //     },
    //     updateTodo(index) {
    //         if (this.todos[index].text.trim() === '') {
    //             this.todos.splice(index, 1);
    //         }
    //     }
    // }
}
</script>

<style lang="scss" scoped></style>