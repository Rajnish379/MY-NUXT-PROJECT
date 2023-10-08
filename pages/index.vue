<script setup lang="ts">
const title = ref("this is my dynamic title")
useHead({
    title: 'This is my homepage for Nuxt',
    meta: [
        {name: 'description',content:'Page where you are going to find everything'},
        {name: "Akhilesh",content: 'Shankar'}
    ],
    bodyAttrs: {
        class: 'test'
    },
    script : [{children: 'console.log(\'Hello world\')'}]
})
// useFetch works both for CSR and SSR
const {data: productCount,pending} = await useAsyncData("products",() => 
$fetch("/api/products"));

const refresh = () => refreshNuxtData("products");


// console.log(toRaw(products.value));
const response = await $fetch('/api/hello')
import { useCounter } from '~/composables/states';
import {useCounterStore} from '~/stores/myStore'
const counter = useCounter(); 
const store = useCounterStore();
console.log(response)
console.log(store)
</script>

<template>
  <div>
    <Head>
        <Title>This is my title</Title>
        <Meta name="description" content="title" />
    
    </Head>
    <p>{{ pending? "Loading": productCount }}</p>
    <div id="main">
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
  <Counter id="counter" />
</div>
</template>
