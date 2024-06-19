<script setup>
    defineProps(['name'])
    defineEmits(['remove'])
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