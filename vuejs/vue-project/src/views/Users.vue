<template>
    <div>
        <form @submit.prevent="createUser">
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" v-model="newUser.name" required>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" v-model="newUser.email" required>
            </div>
            <div>
                <label for="phone">phone</label>
                <input type="text" id="phone" v-model="newUser.phone" required>
            </div>
            <button type="submit">New User</button>
        </form>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            <template v-for="user in data" :key="user.id">
                <tr>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td><button style="padding: 3px; background-color: aquamarine;"><RouterLink :to="`/users/${user.id}`">xem</RouterLink></button></td>
                    <td><button @click="deleteUser(user.id)" style="padding: 3px; background-color: #ccc;">xóa</button></td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script setup>
import axios from 'axios';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';

const newUser = ref({
    name: '',
    email: '',
    phone: ''
})
const data = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(() => {
    try {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => data.value = response.data)
    } catch (err) {
        error.value = 'Error fetching data'
        console.log(err)
    } finally {
        loading.value = false
    }
})

const deleteUser = async (id) => {
    try{
        console.log(id)
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        data.value = data.value.filter(user => user.id !== id)
    } catch(err){
        console.log(err)
    }
}

const createUser = async () => {
    try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser)
        data.value.push(response.data)
        console.log(data.value)
        newUser.value = {name:'', email:'', phone:''}
    } catch(err){
        console.log(err)
    }
}

</script>

<style lang="scss" scoped></style>