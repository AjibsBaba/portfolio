<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-trans fixed-top">
    <div class="container">
      <a class="navbar-brand" href="">
        <img src="../assets/Lomo.svg" alt="logo" width="68px" height="46px">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span><img src="../assets/menu.svg" width="30" height="30" alt="Menu Button"></span>
      </button>
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbar">
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        </ul>
    </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar-toggler {
  border-color: #FFFFFF;
}
.nav-item {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
}


</style>
