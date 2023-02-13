
<template>
<v-container flex>
  {{ this.time }}
  <v-row class="mt-10">
    <v-col>
      <h1>Midi Data Test</h1>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-btn class="mx-6" @click="this.play()">play</v-btn>
      <v-btn class="mx-6" @click="this.stop()">pause</v-btn>
      <v-btn class="mx-6" @click="this.volumeUp()">Volume Up</v-btn>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <h1>Audio Context Data</h1>
      <h3>time <h1>{{ this.time  }}</h1></h3>
    </v-col>
  </v-row>

</v-container>
</template>

<script>
/* eslint-disable */
import { World, sound } from '../World/World.js'

export default {
  name: 'HelloWorld',
  data() {
    return {
      time: 0,
      sound: null,
    }
  },
  methods: {
    stop() {
      console.log(sound.context.currentTime)
    },
    play() {
        // Get a reference to the container element
        const container = document.querySelector("#scene-container");
        
        // Create an instance of the World app
        const world = new World(container);
        
        // Start the loop (produce a stream of frames)
        world.start();
        console.log(sound.context.currentTime)
    }
  }
}
</script>
<style scoped>
.transparent-background{
  background-color: rgba(255,255,255,50%) !important;
}
</style>