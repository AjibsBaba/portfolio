<template>
<div class="container mt-custom2">
  <div class="row">
    <div class="col port-col">
      <div class="mt-custom ms-1 p-4">
        <h1 class="user-select-none">Portfolio Of Samuel Ajibade.</h1>
        <h2 class="user-select-none">Backend , Native Android, API development, Deep Learning & some frontend things like VueJs</h2>
        <a href="https://drive.google.com/file/d/1eqvXKmCCloOJTI4T0RV6Wk-ISfO2yR_4/view?usp=sharing" target="_blank" download>
          <button class="btn btn-warning" type="button">Resume</button>
        </a>
      </div>
    </div>
    <div class="col vec-col d-none d-lg-block">
      <div class="img-block mt-4">
        <img src="../assets/vector.svg" alt="Man Showing analytics" >
      </div>
    </div>
  </div>
    <div class="nav-btn">
      Scroll Down
    </div>
  <div class="row mt-3" style="background-color: #FFB037">
    <div class="col-sm-6 align-self-center">
      <div class="ms-1 p-3">
        <h1 class="name-tag">Hi, I'm Samuel</h1>
        <h3 class="mt-2 position-tag">Software Engineer</h3>
        <p class="mt-3 info">A software engineer with hands-on experience in developing web and mobile applications using different architectures.
          I currently work with Django, Vue & Kotlin</p>
      </div>
    </div>
    <div class="col-sm-6 align-self-center order-first p-4">
      <div class="text-center">
        <img src="../assets/passport.jpg" class="img-fluid rounded" alt="Samuel Ajibade's Image">
      </div>
    </div>
  </div>
  <div class="row mt-4 ms-1">
    <div class="col">
      <h3 class="main">Projects</h3>
      <h5 class="mt-1 subtitle">Most Recent Works</h5>
    </div>
    <div class="row mt-4 p-4">
      <div class="col-sm-6 align-self-center order-first">
        <div class="text-center">
          <img src="../assets/diabetes.png" alt="Product info" class="img-fluid rounded">
        </div>
      </div>
      <div class="col-sm-6 align-self-center">
        <h3 class="product-name">diabetes-diagnosis</h3>
        <p class="product-info">predicts diabetes mellitus type 2 with the aid of machine learning. Written in Flask, Html, CSS.</p>
        <h5 class="link-custom">Visit Website</h5>
      </div>
    </div>
  </div>
  <div class="row mt-4 p-4">
    <div class="col-sm-6 align-self-center order-first">
      <h3 class="product-name">Acefood</h3>
      <p class="product-info">android application that predicts up to 10 classes of tomato disease using computer vision. Built with Tensorflow and Kotlin</p>
      <h5 class="link-custom">Download Application</h5>
    </div>
    <div class="col-sm-6 align-self-center">
      <div class="text-center">
        <img src="../assets/diabetes.png" alt="Product info" class="img-fluid rounded">
      </div>
    </div>
  </div>
  <div class="row mt-4 p-4">
    <div class="col-sm-6 align-self-center order-first p-4">
      <div class="text-center">
        <img src="../assets/classifer.png" alt="Product info" class="img-fluid rounded">
      </div>
    </div>
    <div class="col-sm-6 align-self-center">
      <h3 class="product-name">IM-Classifier</h3>
      <p class="product-info">Deep learning model to classify the images of flower. Built with Jupyter notebook and Pytorch</p>
      <h5 class="link-custom">Launch Jupyter Notebook</h5>
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
.mt-custom2 {
  margin-top: 85px;
}
.product-name {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #3B3B3B;
  margin-top: 10px;
}
.product-info {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: rgba(53, 53, 53, 0.71);
}
.link-custom {
  color: #FFB037;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  size: 16px;
  margin-bottom: 10px;
}
.info {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: #FFFFFF;
}
.position-tag {
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  opacity: 0.7;
}
.name-tag {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  size: 40px;
}
.main {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  size: 48px;
  color: #3B3B3B;
}
.subtitle {
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-style: normal;
  size: 18px;
  color: #B2B0B0;
}

.img-block {
  text-align: center;
  display: block;
  object-fit: contain;
}
.mt-custom {
  margin-top: 200px;
}

.nav-btn {
  color: #FFB037;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.port-col {
  background-color: rgba(199, 199, 199, 0.1);
  height: 532px;
  width: 532px;
}

.vec-col {
  background-color: #FFB037;
  width: 100%;
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


</style>
