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
    meta: [
      {charset: "utf-8"},
      {name: "og:title", content: "Portfolio | Samuel Ajibade"},
      {name: "og:url", content: "https://www.ajibsbaba.com"},
      {name: "og:type", content: "website"},
      {name: "og:image", content: "https://www.ajibsbaba.com/img/passport.1fa0f126.png"},
      {name: "og:description", content: "A Software Engineering Portfolio of Samuel Ajibade"},
      {name: "description", content: "A Software Engineering Portfolio of Samuel Ajibade"},
      {name: "keyword", content: "Portfolio, Software Engineer, Web Developer, Mobile Engineer, Android Developer, Developer, Frontend Developer"}
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
