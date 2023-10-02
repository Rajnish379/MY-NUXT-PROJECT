<script setup>
// Composables have auto import in Nuxt3
console.log(useNuxtApp());
sayHello();
</script>
<template>
    <div class="Main">
        <h1>Hello Nuxt 3</h1>
        <!-- Here it directly looks into the public folder with / -->
        <!-- <img src="/2.png" alt="" /> -->
        <IconsBell />
    </div>
 
    
</template>