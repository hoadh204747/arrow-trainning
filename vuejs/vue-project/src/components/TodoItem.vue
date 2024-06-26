<script setup>
import { defineProps, defineEmits, onBeforeUnmount, onUnmounted } from 'vue';

const props = defineProps(['name']);
const emit = defineEmits(['remove']);


    onBeforeUnmount(() => {
        console.log('before unmount')
        alert(`Component with name "${props.name}" is about to be removed.`);
    })

    onUnmounted(() => {
        console.log('unmount')
        alert(`Component with name "${props.name}" has been removed.`)
    })
</script>
<template>
    <div>
        <li>
            {{ name }}
            <button @click="$emit('remove')">Remove</button>
        </li>
    </div>
</template>


<style lang="scss" scoped>

</style>