<template>
  <v-app>

  <div id="parallax" class="parallax">
    <div class="parallax__group">
      <div class="parallax__layer parallax__layer--deep">
        <bannerBack/>
      </div>
      <div class="parallax__layer parallax__layer--back">
        <bannerText/>
      </div>
      <div class="parallax__layer parallax__layer--base box">
        <div class="row">
          <blog_content :blogs="blogs" />
          <sideMenu :sideContent="sideContent" :blogs="blogs"/>
        </div>
      </div>
    </div>
  </div>
  <cdpanel :panelData="panelData" />
  </v-app>
</template>

<script>
import bannerBack from '../components/banner.vue';
import bannerText from '../components/bannerText.vue';
import sideMenu from '../components/sideMenu.vue';
import blog_content from '../components/blogContent.vue';
import blogdata from '../assets/blogdb.json';
import cdpanel from '../components/cdpanel.vue';



export default {
  name: 'App',
  components: {
    bannerBack,
    bannerText,
    blog_content,
    sideMenu,
    cdpanel
},
  data() {
    var routeTitle = document.title;
    return {
      routeTitle,
      blogs: blogdata.blogs,
      sideContent: blogdata.sideContent,
      panelData: blogdata.panelContent,
  }
  }
};

 
</script>

<style>
::-webkit-scrollbar {
width: 0em;
background: yellow;
display: inline;
}

#app {
  width:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
}
body {
  margin: 0;
  width: 100%;
}
.box {
  display: table;
  background-color: #353839;
  width: 100%;
}
/* The Setup */

.parallax {
  perspective: 1px;
  height: auto;
  -webkit-perspective: 1px;
  margin-left: 0;
  margin-bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.parallax__group {
  position: relative;
  height: 100vh;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.parallax__group_long {
  position: relative;
  height: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: presevre-3d;
}

.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 100vh 0;
}

.parallax__layer--base {
  top: 100vh;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  z-index: 2;
  padding: 0;
}

.parallax__layer--back {
  transform: translateZ(-1px) scale(2);
  -webkit-transform: translateZ(-1px) scale(2);
  z-index: 1;
}

.parallax__layer--deep {
  transform: translateZ(-2px) translateY(0) scale(3);
  -webkit-transform: translateZ(-2px) translateX(-20px) translateY(100vh) scale(3);
}

/* Style the Layers*/

.row {
  content:"";
  display: table;
  clear:both;
  float: left;
  background-color: #353839;
  text-align: left;
  width: 100%;
}

</style>
