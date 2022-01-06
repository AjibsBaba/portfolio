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
  metaInfo: {
    title: "Portfolio | Samuel Ajibade",
    htmlAttrs: {
      lang: "en-UK"
    },
    meta: [
      {charset: "utf-8"},
      {name: "description", content: "A Software Engineering Portfolio of Samuel Ajibade"},
      {name: "keyword", content: "Portfolio, Software Engineer, Web Developer, Mobile Engineer, Android Developer, Linux"}
    ]
  },
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
