import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { World } from './World/World.js'

loadFonts()

function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");
  
  // Create an instance of the World app
  const world = new World(container);
  
  // Start the loop (produce a stream of frames)
  world.start();
 }
  
 main();

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
