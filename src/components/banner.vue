<template>
  <section class="sect-banner">
    <ul class="kf-slider" style="list-style-type: none">
        <li></li>
        <li></li>
        <li></li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'bannerBack',
    props: {
      msg: String
    }
  }
  </script>
<style scoped>

.sect-banner {
  display: table;
  width: 100%;
  text-align: center;
  height: 100vh;
  color: rgba(255, 255, 255, 0.9);
  /*----------------------------------------------   
  -DEMO1: Unordered list
  -----------------------------------------------  */
  /*----------------------------------------------   
  -DEMO2: Banner bg
  -----------------------------------------------  */ }
  .sect-banner:after {
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(118, 144, 164, 0.4);}
  .sect-banner .v-center {
    display: table-cell;
    position: relative;}
    .sect-banner .v-center h1 {
      -webkit-animation: fade-in ease-in-out 2s 0.5s both;
      -moz-animation: fade-in ease-in-out 2s 0.5s both;
      animation: fade-in ease-in-out 2s 0.5s both;
      font-weight: bolder;
      color: antiquewhite;}
    .sect-banner .v-center h3 {
      -webkit-animation: fade-in ease-in-out 2s 0.5s both;
      -moz-animation: fade-in ease-in-out 2s 0.5s both;
      animation: fade-in ease-in-out 2s 0.5s both;
      font-weight: bolder;
      color: antiquewhite;}
    .sect-banner .v-center p {
      font-size: 100%;
      -webkit-animation: fade-in ease-in-out 2s 0.5s both;
      -moz-animation: fade-in ease-in-out 2s 0.5s both;
      animation: fade-in ease-in-out 2s 0.5s both;
      font-weight: bold;
      color: antiquewhite;}
  .sect-banner ul.kf-slider li {
    filter: brightness(30%);
    height: 100vh;
    width: 110Vw;
    position: absolute;
    top: 0;
    left:0;
    margin: auto;
    padding: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-animation: fade-out 9s infinite both;
    -moz-animation: fade-out 9s infinite both;
    animation: fade-out 9s infinite both;
    background-image: url(../assets/banner-1-sm.jpg); }
    @media (min-width: 58em) {
      .sect-banner ul.kf-slider li {
        background-image: url(../assets/banner-1.jpg); } }
  .sect-banner ul.kf-slider li:nth-child(2) {
    background-image: url(../assets/banner-2-sm.jpg);
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    animation-delay: 3s; }
    @media (min-width: 58em) {
      .sect-banner ul.kf-slider li:nth-child(2) {
        background-image: url(../assets/banner-2.jpg); } }
  .sect-banner ul.kf-slider li:nth-child(3) {
    background-image: url(../assets/banner-3-sm.jpg);
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    animation-delay: 6s; }
    @media (min-width: 58em) {
      .sect-banner ul.kf-slider li:nth-child(3) {
        background-image: url(../assets/banner-1.jpg); } }
  .sect-banner .banner-bg {
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
    background-image: url(../assets/banner-3-sm.jpg);
    -webkit-animation: slider-sm ease-in-out 30s both infinite;
    -moz-animation: slider-sm ease-in-out 30s both infinite;
    animation: slider-sm ease-in-out 30s both infinite; }
    @media (min-width: 58em) {
      .sect-banner .banner-bg {
        background-image: url(../assets/banner-3-sm.jpg);
        -webkit-animation: slider-lg ease-in-out 30s both infinite;
        -moz-animation: slider-lg ease-in-out 30s both infinite;
        animation: slider-lg ease-in-out 30s both infinite; } }

@-webkit-keyframes fade-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }
@-moz-keyframes fade-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }
@keyframes fade-in {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@-webkit-keyframes fade-out {
  33% {
    opacity: 1; }
  66% {
    opacity: 0; } }
@-moz-keyframes fade-out {
  33% {
    opacity: 1; }
  66% {
    opacity: 0; } }
@keyframes fade-out {
  33% {
    opacity: 1; }
  66% {
    opacity: 0; } }

.title {
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


#top {
    height: 50px
}

#bottom {
    height: 100%
}

/*----------------------------------------------   
--Keyframes Slider - Sm
-----------------------------------------------  */
@-webkit-keyframes slider-sm {
  0% {
    background-image: url(../assets/banner-1-sm.jpg); }
  33% {
    background-image: url(../assets/banner-2-sm.jpg); }
  66% {
    background-image: url(../assets/banner-3-sm.jpg); }
  100% {
    background-image: url(../assets/banner-1-sm.jpg); } }
@-moz-keyframes slider-sm {
  0% {
    background-image: url(../assets/banner-1-sm.jpg); }
  33% {
    background-image: url(../assets/banner-2-sm.jpg); }
  66% {
    background-image: url(../assets/banner-3-sm.jpg); }
  100% {
    background-image: url(../assets/banner-1-sm.jpg); } }
@keyframes slider-sm {
  0% {
    background-image: url(../assets/banner-1-sm.jpg); }
  33% {
    background-image: url(../assets/banner-2-sm.jpg); }
  66% {
    background-image: url(../assets/banner-3-sm.jpg); }
  100% {
    background-image: url(../assets/banner-1-sm.jpg); } }
/*----------------------------------------------   
--Keyframes Slider - Lg
-----------------------------------------------  */
@-webkit-keyframes slider-lg {
  0% {
    background-image: url(../assets/banner-1.jpg); }
  33% {
    background-image: url(../assets/banner-2.jpg); }
  66% {
    background-image: url(../assets/banner-3-sm.jpg); }
  100% {
    background-image: url(../assets/banner-1.jpg); } }
@-moz-keyframes slider-lg {
  0% {
    background-image: url(../assets/banner-1.jpg); }
  33% {
    background-image: url(../assets/banner-2.jpg); }
  66% {
    background-image: url(../assets/banner-3-sm.jpg); }
  100% {
    background-image: url(../assets/banner-1.jpg); } }
@keyframes slider-lg {
  0% {
    background-image: url(../assets/banner-1.jpg); }
  33% {
    background-image: url(../assets/banner-2.jpg); }
  66% {
    background-image: url(../assets/banner-3-sm.jpg); }
  100% {
    background-image: url(../assets/banner-1.jpg); } }

</style>