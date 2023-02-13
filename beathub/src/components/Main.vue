
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
      <v-btn class="mx-6" @click="this.pause()">pause</v-btn>
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
import { Howl, Howler } from 'howler';
import audiosrc from '@/assets/audio.mp3'

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
      this.sound.stop()
    },
    play() {
      this.sound = new Howl({
      src: [audiosrc],
      html5: true
    })
      var id = this.sound.play()
      console.log(this.sound)
      var counter = 0;
      console.log(this.sound['_seek'])
    //   var i = setInterval(function(){
    //   // do your thing
    //   console.log(this.sound)
    // }, 200)
    },
    pause() {
      console.log(this.time)
    },
    volumeUp() {
      Howler.volume(0.5)
    }
  }
}
</script>
<style scoped>
.transparent-background{
  background-color: rgba(255,255,255,50%) !important;
}
</style>