<template>
  <div id="app">
    <nav-bar/>
    <landing/>
    <Footer />
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import Landing from "@/components/Landing";
import Footer from "@/components/Footer";


export default {
  name: 'App',
  components: {
    NavBar,
    Landing,
    Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(199, 199, 199, 0.1);
}
</style>
