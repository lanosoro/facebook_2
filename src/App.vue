<template>
  <v-app>
    <router-view><index /></router-view>
    <router-view><profile /></router-view>
    <router-view><signup/></router-view>
  </v-app>
</template>

<script>
import index from "./views/index.vue";

import profile from "./views/profile.vue";
import Signup from './views/signup.vue';

export default {

  components: {
    profile,
    index,
    Signup
  }
};
</script>
