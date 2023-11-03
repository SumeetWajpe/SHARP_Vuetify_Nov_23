<template>
    <div>
        Course Details for {{ this.$route.params.id }}

        {{ course.title }}
    </div>
</template>
<script>
import axios from "axios"
export default {
    data: function () {
        return {
            course: { title: "dummy" }
        }
    }, mounted: async function () {
        const { data } = await axios.get(`http://localhost:3500/courses/${this.$route.params.id}`);
        this.course = data;
    }
}
</script>
<style></style>