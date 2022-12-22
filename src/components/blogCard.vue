<template>
    <div class="card-blogEntry">
    <img class="blog-thumbnail" :src="'/img/' + blog.thumbnail + '.jpg'" :alt="blog.alt">
    <div class="blog-details">
      <h3><b>{{blog.title}}</b></h3>
      <h5>Week {{blog.week}} <span class="date">{{blog.date}}</span></h5>
    <div class="blog-description">
      <h4><b>Tasks:</b></h4>
      <h6>{{blog.description_1}}</h6>
      <h6>{{blog.description_2}}</h6>
      <h6>{{blog.description_3}}</h6>
      <a class="button js-cd-panel-trigger" :data-panel="blog.thumbnail" @click="panelTrigger"><b>SEE CHARTS »</b></a>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'BlogCard',
    props: {
      blog: Object,
    }
};


</script>

<style scoped>
.card-blogEntry{
  padding: 40px;
  margin: 20px;
  color: black;
  background-color: white;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 25px;
  max-width: 100%;
}

.blog-thumbnail {
  max-width: 100%;
  width: 100%;
  height: 300px;
}

@media (max-width: 550px) {
  .card-blogEntry {
    margin: 20px 10px;
  }
}

h3 {
  font-size: 24px
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Segoe UI",Arial,sans-serif !important;
    font-weight: 400;
    margin: 10px 0;
}
.button {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    margin-top: 10px;
}

.button:hover {
  background-color:#ddd;
}

</style>