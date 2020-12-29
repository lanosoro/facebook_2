<template>
  <v-app>
    <router-view><index /></router-view>
    <router-view><profile /></router-view>
  </v-app>
</template>

<script>
import index from "./views/index.vue";

import profile from "./views/profile.vue";

export default {
  name: "App",

  components: {
    profile,
    index
  }
};
</script>
