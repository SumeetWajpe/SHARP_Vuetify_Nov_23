<template>
    <v-card flat color="grey-darken-4 rounded-0">
        <v-container>
            <v-row>
                <v-col cols="6">
                    <div class="d-flex flex-column">
                        <v-breadcrumbs :items="breadcrumbsitems" class="font-weight-bold">
                            <template v-slot:divider>
                                <v-icon icon="mdi-chevron-right"></v-icon>
                            </template>
                        </v-breadcrumbs>

                        <div width="200">
                            <v-card :title="course.title" flat color="grey-darken-4 rounded-0">
                                <v-list-item>
                                    <v-icon size="16" icon="mdi-star" color="orange" v-for="n in course.rating"
                                        :key="n"></v-icon>

                                    <v-card-text class="pl-0 ml-0">
                                        {{ course.description }}

                                    </v-card-text>
                                    <v-card-text class="pl-0 ml-0">
                                        {{ course.description }}

                                    </v-card-text>
                                </v-list-item>
                            </v-card>
                        </div>
                    </div>
                </v-col>
                <v-col cols="3">
                    <v-card class="mx-auto" max-width="400">
                        <v-img class="align-end text-white" height="200" :src="course.imageUrl" cover
                            @click="overlayvideo = !overlayvideo">
                        </v-img>

                        <v-list>
                            <v-list-item>
                                <v-btn color="primary" class="rounded-0" @click="overlay = !overlay">
                                    Add to Cart
                                </v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn variant="outlined" class="rounded-0" @click="overlay = !overlay">
                                    Buy Now
                                </v-btn>
                            </v-list-item>


                        </v-list>

                        <v-overlay :model-value="overlay" class="align-center justify-center">
                            <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
                        </v-overlay>
                        <v-overlay :model-value="overlayvideo" class="align-center justify-center">
                            <video controls autoplay src="@/assets/React.mp4"></video>
                        </v-overlay>


                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel v-for="i in 3" :key="i" title="Item"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<script>
import axios from "axios"
export default {
    data: function () {
        return {
            overlay: false,
            overlayvideo: false,
            breadcrumbsitems: ["Home", "CourseDetails"],
            course: { title: "dummy" }
        }
    }, mounted: async function () {
        const { data } = await axios.get(`http://localhost:3500/courses/${this.$route.params.id}`);
        this.course = data;
    }, watch: {
        overlay(val) {
            val && setTimeout(() => {
                this.overlay = false
            }, 3000)
        }
    }
}
</script>
<style></style>