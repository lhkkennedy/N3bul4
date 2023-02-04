<template>
  <v-app>
      <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
<style>
#app {
 position: relative;
 padding: 0px auto;
 padding: 0px 2vw;
 z-index: 2;
 background-color: rgba(255,255,255, 50%) !important;
}
#router-view {
  background-color: rgba(255,255,255, 50%)
}
</style>