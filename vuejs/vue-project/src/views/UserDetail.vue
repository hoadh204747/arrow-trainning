<template>
    <div>
        <h1>{{ user.name }}</h1>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref} from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const user = ref({})
const route = useRoute()
const userId = route.params.id;

onMounted(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
            user.value = response.data;
        })
})

</script>

<style lang="scss" scoped>

</style>