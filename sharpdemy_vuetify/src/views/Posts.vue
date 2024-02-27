<template>
    <ul>
        <li v-for="post in posts">
            {{ post.title }}
        </li>
    </ul>
</template>
<script setup>
import axios from "axios";
import { onMounted } from "vue"
import { ref } from "vue"
let posts = ref([])
onMounted(async () => {
    let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts.value = data
})
</script>