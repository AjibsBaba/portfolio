<template>
  <!-- Footer -->
  <footer class="footer-margin yellow p-1">
    <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col">
            <h1 class="text-white">About</h1>
            <h4 class="mt-2 text-wrap" style="width: 9rem">Designed and developed with with Vue, CSS & Figma</h4>
            <h4 class="mt-2">developerLomo 2021</h4>
          </div>
          <div class="col">
            <h1 class="text-white">Explore</h1>
            <h4 class="mt-1">Home</h4>
            <h4 class="mt-1">About</h4>
            <h4 class="mt-1">Projects</h4>
          </div>
          <div class="col">
            <h1 class="text-white">Social</h1>
            <i class="fab fa-twitter fad-pad"></i>
            <i class="fab fa-github fad-pad"></i>
            <i class="fab fa-instagram fad-pad"></i>
          </div>
        </div>

      </div>
      </div>
      <!-- Grid row -->


  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer-margin {
  margin-top: 25px;
}
.fad-pad {
  margin-right: 5px;
  color: #FFFFFF;
  opacity: 0.7;
}
.fad-pad:hover {
  color: white;
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 24px;
}
h4 {
  font-family: 'Poppins', sans-serif;
  font-size: 8px;
  font-weight: 400;
  font-style: normal;
  color: rgba(255, 255, 255, 0.7);
}
.yellow {
  background-color: #FFB037;
  margin-top: 30px;
}



</style>
