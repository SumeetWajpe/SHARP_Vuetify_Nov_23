<template>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel hide-delimiters height="350">
          <v-carousel-item v-for="(item, i) in carouselitems" :src="item.src" :key="i" cover></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" sm="6" md="3" v-for="course in  posts ">
        <v-card class="rounded-0 mx-auto" max-width="250">

          <router-link :to="{ name: 'coursedetails', params: { id: course.id } }">
            <v-img class="align-end text-white" height="200" :src="course.imageUrl" cover>
              <v-card-title>{{ course.title }}</v-card-title>
            </v-img>
          </router-link>

          <v-card-subtitle class="pt-2">
            <div>{{ course.trainer }}</div>
          </v-card-subtitle>

          <v-card-text class="pt-0 mt-0">
            <!-- <v-icon icon="mdi-star" color="orange" v-for="n in course.rating" :key="n"></v-icon> -->
            <!-- can use v-rating -->
            <div class="d-inline-flex">
              <v-img height="15" width="15" src="@/assets/star.svg" v-for=" n  in  course.rating " :key="n"> </v-img>

            </div>

          </v-card-text>
          <v-card-text class="pt-0 mt-0">
            <div>₹.{{ course.price }}</div>
          </v-card-text>

          <v-card-actions class="pt-0 mt-0">
            <v-btn color="primary" variant="outlined">
              {{ course.likes }}
              <v-icon icon="mdi-thumb-up-outline"></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue"
import { ref } from "vue"
let posts = ref([])
// export default {
//   data: function () {
//     return {
//       courses: [],
//       carouselitems: [
//         { src: "https://img-c.udemycdn.com/notices/featured_carousel_slide/image/8f7b8f3d-5125-40ec-ba23-1e7ba7ed0cd1.jpg" },
//         { src: "https://img-c.udemycdn.com/notices/web_carousel_slide/image/2c7e2024-64a4-498e-ab41-096b9c5dc216.png" }

//       ]
//     }
//   },
//   mounted: async function () {
//     const { data } = await axios.get("http://localhost:3500/courses");
//     this.courses = data;
//   }
// }



</script>
