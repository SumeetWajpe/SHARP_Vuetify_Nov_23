<template>
    <div>
        Prod details for {{ postData.id }}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from "axios"


const route = useRoute()
const postData = ref()


onMounted(async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
    postData.value = data
})


</script>

<style scoped></style>