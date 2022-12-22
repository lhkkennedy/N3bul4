<template>
    <div class="side-menu">
        <h4 class="side-header">
            <b>{{card.title}}</b>
        </h4>
        <div v-if="card.name == 'profile'" class="side-content">
            <img class="profileimg" :src="'/img/' + card.src + '.jpg'" alt="profileimg">
            <p>{{card.text}}</p>
        </div>
        <div v-if="card.name == 'list'" class="post-list">
            <ul :key="index" v-for="(blog, index) in blogs" class="ul-posts hoverable">
                <li :blog="blog">
                    <a href="#anchor-{{blog.id}}">
                        <img :src="'/img/' + blog.thumbnail + '.jpg'" alt="Image">
                        <p>{{blog.title}}</p>
                        <p>Week {{blog.Week}}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div v-if="card.name == 'tags'" class="tags">
            <div style="display: inline-block" :key="index" v-for="(tag, index) in items" >
                <a :tag="tag" class="tag-button">{{tag}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sideCard',
    props: {
        htext: String,
        blogs: Array,
        card: Object,
        blog: Object
    },
    data() {
        return {
            parentMessage: 'Tags',
            items: ["HTML", "CSS", "API", "Data Science", "Charts"]
        }
    }
}
</script>

<style scoped>
.side-header {
    color: rgb(255, 247, 236);
    background-color: rgb(146, 145, 145) !important;
    padding-left: 10px;
    padding: 16px;
    padding-top: 10px;
    margin: 0;
}

.side-content {
    padding: 16px;
    padding-top: 10px
}

.tags {
    padding: 10px;
}
.ul-posts {
    list-style-type: none;
    padding: 0;
    margin: 0;
    background-color: #ccc
}

.ul-posts.hoverable li:hover {
    background-color: white;
}

.ul-posts li {
    font-size: 18px;
    text-decoration: none;
    padding: 8px 16px;
    border-bottom: 1px solid #ddd;
}

.ul-posts li a {
    text-decoration: none;
}

.ul-posts li item:last-child {
    border-bottom: none;
}

.ul-posts li a {
    text-decoration: none;
}

.ul-posts li item:last-child {
    border-bottom: none;
}

.ul-posts img {
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 16px;
    margin-bottom: 16px;
}

.tag-button {
    color: black;
    background-color: #f1f1f1;
    margin-top : 5px;
    margin: 2px;
    font-size: 12px;
    user-select: none;
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
}

.tag-button:hover {
    background-color: darkslategray;
    color: white;
}
</style>