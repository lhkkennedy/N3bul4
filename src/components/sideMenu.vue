<template>
  <div class="side-menu">
    <div :key="index" v-for="(card, index) in sideContent">
      <sideCard class="sideCard" :blogs="blogs" :card="card" />
    </div>
  </div>
</template>

<script>
import sideCard from './sideCard.vue';

export default {
  name: 'sideMenu',
  props:{
    sideContent: Array,
    blogs: Array
  },
  components: {
    sideCard,
  }
}

</script>

<style scoped>
.side-menu {
    width: 33.3333333%;
    display: inline-block;
    margin: 0;
    padding: 0;
}

@media (max-width: 700px) {
  .side-menu {
    width: 100%;
  }
}

.sideCard {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  float: none;
  color: black;
  background-color: #ccc;
  display: block;
}

@media (max-width: 700px) {
  .sideCard {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
}

</style>