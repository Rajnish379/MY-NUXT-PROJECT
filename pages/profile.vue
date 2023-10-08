<script setup lang="ts">
// lang attribute should be ts to use this useHead attribute
useHead({
    title: "profile page"
})
const {sayHello} = useUtils();
sayHello();
</script>

<template>
    <div class="container py-3 mx-auto Main">
        <h1 class="text-teal-500">Hello Nuxt 3</h1>
    </div>
</template>