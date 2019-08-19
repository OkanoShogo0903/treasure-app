<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Web Smart Speaker</span>
        <span class="font-weight-light"> quick </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/OkanoShogo0903?tab=repositories"
        target="_blank"
      >
        <span class="mr-2">Author Github</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <recognition/>
    </v-content>
  </v-app>
</template>

<script>

import recognition from './components/recognition';
import Vue from 'vue'
import vuetify from './plugins/vuetify';

export default {
  name: 'App',
  components: {
    recognition,
  },
};
</script>

