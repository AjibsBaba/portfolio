<template>
<div class="container">
  <div class="row">
    <div class="col port-col">
      <div class="position-absolute top-50 translate-middle-y">
        <h1 class="text-wrap" style="width: 22rem">Portfolio Of Samuel Ajibade.</h1>
        <h2 class="text-wrap" style="width: 25rem">Backend , Native Android, Data Analytics, API development, Deep Learning.</h2>
        <a href="https://drive.google.com/file/d/1eqvXKmCCloOJTI4T0RV6Wk-ISfO2yR_4/view?usp=sharing" target="_blank" download>
          <button class="btn btn-warning" type="button">Resume</button>
        </a>
      </div>
    </div>
    <div class="col-md vec-col">
      <img src="../assets/vector.svg" width="431" height="431" alt="Man Showing analytics" >
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col-md-auto nav-btn">
      Scroll Down
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Landing"
}
</script>

<style scoped>
.nav-btn {
  color: #FFB037;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  margin-top: 15px;
}
.port-col {
  background-color: rgba(199, 199, 199, 0.1);

}

.vec-col {
  background-color: #FFB037;
  width: 637px;
  height: 532px;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: rgba(53, 53, 53, 0.71);
  margin-top: 26px;
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #3B3B3B;

}

.btn-warning {
  background-color: #FFB037;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 14px;
  width: 170px;
  height: 52px;
  margin-top: 30px;
  color: #FFFFFF;
}

.btn-warning:hover {
  background-color: #FFFFFF;
  border-color: #FFB037;
  color: #FFB037;
}

.sec {
  background-color: #FFB037;
}

</style>
