<template>
  <v-app-bar :elevation="2" density="compact">
    <!-- <v-btn icon="mdi-menu" class="d-md-none"></v-btn> -->

    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer">

    </v-app-bar-nav-icon>
    <v-app-bar-title>
      SHARPDemy
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-heart-outline" class="hidden-sm-and-down"></v-btn>
      <v-btn icon="mdi-magnify" class="d-md-none"></v-btn>
      <v-btn icon="mdi-cart-outline"></v-btn>
      <v-btn icon="mdi-bell-outline" class="hidden-sm-and-down"></v-btn>

      <v-badge dot color="primary" class="hidden-sm-and-down">
        <v-avatar color="black">
          <v-btn class="text-none" stacked>
            <span class="text-subtitle-1">SW</span>
          </v-btn>
        </v-avatar>
      </v-badge>

    </template>

  </v-app-bar>
  <v-navigation-drawer v-model="drawer" class="d-md-none">
    <v-list>
      <v-list-item
        prepend-avatar="https://media.licdn.com/dms/image/C4E03AQE0LcmSQIJH0A/profile-displayphoto-shrink_800_800/0/1602230903566?e=1704326400&v=beta&t=zCC3VUe34-nD4WyWe6TM1xodEGGfvClBsQHmGdidsNs"
        title="Sumeet Wajpe" subtitle="sumeetwajpe@gmail.com">

      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-subheader class="text-subtitle-1 font-weight-bold">
          Learn
        </v-list-subheader>
        <v-list-group value="WebDev">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Web Development"></v-list-item>
          </template>
          <v-list-item v-for="title in webdev" v-bind="props" :title="title"></v-list-item>
        </v-list-group>
        <v-divider>
        </v-divider>
        <v-list-item title="Mobile Development"></v-list-item>
        <v-divider></v-divider>
        <v-list-item title="App Development"></v-list-item>

      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: function () {
    return {
      drawer: false,
      webdev: ["HTML5", "CSS3", "ES6", "VUE"]
    }
  }
}
</script>
