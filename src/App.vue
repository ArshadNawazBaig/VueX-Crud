<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['getCurrentUser'])
  },
  mounted() {
    if (localStorage.currentUser) {
      this.getCurrentUser(JSON.parse(localStorage.currentUser))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  padding: 0 15px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
