<template>
        <div class="col-blogEntry">
            <div :key="index" v-for="(blog, index) in blogs">
                <BlogCard :blog="blog" :title="blog.title "/>
                <hr>
            </div>
        </div>
</template>

<script>
import BlogCard from './blogCard.vue'

export default {
    name: 'blog_content',
    props: {
        blogs: Array
    },
    components: {
    BlogCard
    }
}
</script>

<style scoped>

@media(max-width:550px) {
    .col-blogEntry {
        width:100%;
        float: left;
    }
}
@media (min-width: 700px) {
    .col-blogEntry{
        width: 66.66666%;
        float: left;
    }
}

</style>