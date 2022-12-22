<template>
  <v-app>

    <v-app-bar id="navbar" style="z-index: 2;" temporary app dark dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title shrink-on-scroll>{{routeTitle}}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list dense nav>
        <v-list-item dense v-for="item in items" :to="item.url" :key="item.title" link>
          
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <br>
      <v-list>
        <router-view name="HomeDrawerView"></router-view>
      </v-list>
    </v-navigation-drawer>


    <v-main style="z-index:0;">
      <router-view @cdpanel="cdpanel"/>
    </v-main>

  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({ drawer: null, items: [
      {
        title: 'Home', icon: 'mdi-view-dashboard', url: '/'
      },
      {
        title: 'Account', icon: 'mdi-account-box', url: '/project'
      },
      {
        title: 'Settings', icon: 'mdi-cog', url: '/about'
      },
      {
        title: 'Data Science Portfolio', icon: 'mdi-cog', url: '/'
      },
    ] })
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>

