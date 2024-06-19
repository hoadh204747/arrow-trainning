<template>
    <div>
        <h1>Cristiano Ronaldo</h1>
        <img :src="imageUrl" width="300px" alt="Cristiano Ronaldo">
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: "https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg",
            awesome: true
        }
    }
}
</script>

<style lang="scss" scoped></style>