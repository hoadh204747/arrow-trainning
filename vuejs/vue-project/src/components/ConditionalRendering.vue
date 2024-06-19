<template>
    <div>
        <div class="btn">
            <button @click="incre">+</button>
            <button @click="decre">-</button>
            <p>Count: {{ count }}</p>
        </div>
        <div>
            <p v-if="count === 5">5 quả bóng vàng</p>
            <p v-else-if="count === 3">3 giày vàng</p>
            <p v-else-if="count === 0">0 World Cup</p>
            <p v-else>GOAT</p>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const count = ref(0)

    function incre() {
        count.value++
    }

    function decre() {
        count.value--
    }


</script>

<style lang="scss" scoped>

</style>