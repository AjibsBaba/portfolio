<template>
  <div id="app">
    <nav-bar/>
    <landing/>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";

export default {
  name: 'App',
  components: {
    NavBar,
    Landing,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
