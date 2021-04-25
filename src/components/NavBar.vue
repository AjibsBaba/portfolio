<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-trans mt-4">
    <div class="container">
      <a class="navbar-brand" href="">
        <img src="../assets/Lomo.svg" alt="logo" width="68px" height="46px">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
        </ul>
      </div>
<!--      <form class="d-flex">-->
<!--        <button class="btn btn-warning btn-lg text-white">Contact</button>-->
<!--      </form>-->
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

</style>
