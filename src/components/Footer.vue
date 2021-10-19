<template>
  <!-- Footer -->
  <footer class="yellow-box">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col">
            <a href="https://www.twitter.com/ajibs_baba"><i class="fab fa-twitter fad-pad"></i></a>
            <a href="https://www.github.com/AjibsBaba"><i class="fab fa-github fad-pad"></i></a>
            <a href="https://www.instagram.com/ajibs_baba"><i class="fab fa-instagram fad-pad"></i></a>
            <a href="https://www.linkedin.com/in/AjibsBaba"><i class="fab fa-linkedin fad-pad"></i></a>
            <h4 class="mt-2 name-tag">© developerLomo 2021</h4>
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
.fad-pad {
  margin-right: 5px;
  color: #FFFFFF;
  opacity: 0.7;
  filter: alpha(opacity=70);
}

.fad-pad:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
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

.yellow-box {
  background-color: #FFB037;
  padding: 10px;
  position: absolute;
  height: auto;
  width: 100%;
}

.name-tag {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  color: #FFFFFF;

}

@media only screen and (max-width: 768px) {
  /* For Mobile Devices */
  .yellow-box {
    background-color: #FFB037;
    padding: 10px;
    position: absolute;
    height: auto;
    text-align: center;
    width: 100%;
  }
}



</style>
