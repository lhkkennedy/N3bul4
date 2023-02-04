<template>
<v-app>
    <v-list dense nav>
        <v-list-item dense :key="index" v-for="(blog, index) in blogs" :to="url"  link>
          <v-list-item-content>
              <v-list-item-title>{{blog.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    <v-list>
    <router-view name=""></router-view>
    </v-list>
</v-app>
</template>

<script>
import blogdata from '../assets/blogdb.json';

export default {
    data() {
        return {
            blogs: blogdata.blogs,
        }
    }
}
</script>
