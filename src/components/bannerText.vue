<template>
  <section class="sect-banner">
    <div class="v-center">
      <h1>Lewis Hikari Kawase Kennedy</h1>
      <p>Profiling my data science skills developed in my university course and beyond.</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'bannerText'
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
    position: relative;
    transform: translateY(-30%);}
    .sect-banner .v-center h1 {
      -webkit-animation: fade-in ease-in-out 2s 0.5s both;
      -moz-animation: fade-in ease-in-out 2s 0.5s both;
      animation: fade-in ease-in-out 2s 0.5s both;
      font-weight: bolder;
      color: antiquewhite;
      font-size: 36px;
      font-family: "Segoe UI",Arial,sans-serif;}
    .sect-banner .v-center h3 {
      -webkit-animation: fade-in ease-in-out 2s 0.5s both;
      -moz-animation: fade-in ease-in-out 2s 0.5s both;
      animation: fade-in ease-in-out 2s 0.5s both;
      font-weight: bolder;
      color: antiquewhite;
      width: 30%}
    .sect-banner .v-center p {
      font-size: 100%;
      -webkit-animation: fade-in ease-in-out 2s 0.5s both;
      -moz-animation: fade-in ease-in-out 2s 0.5s both;
      animation: fade-in ease-in-out 2s 0.5s both;
      font-weight: bold;
      color: antiquewhite;}
      @-webkit-keyframes fade-in {
        0% {opacity: 0; }
        100% {opacity: 1; } }
      @-moz-keyframes fade-in {
        0% {opacity: 0; }
        100% {opacity: 1; } }
      @keyframes fade-in {
        0% {opacity: 0; }
        100% {opacity: 1; } }


</style>