<template>
<div class="container">
  <div class="row" style="margin-bottom: 100px">
    <div class="col-sm-8 align-self-center">
      <div class="mt-custom">
        <h3 class="display-3">I design & develop products that makes people's lives <b>easier.</b></h3>
        <a href="mailto:samuelajibade22@gmail.com" target="_blank">
          <button class="btn btn-warning" type="button">Hire me</button>
        </a>
      </div>
    </div>
  </div>
  <div class="row" style="background-color: #FFB037; border-radius: 20px; margin-bottom: 100px;">
    <div class="col-sm-6 align-self-center">
      <div class="ms-1 p-3">
        <h1 class="name-tag">Hi, I'm Samuel</h1>
        <h3 class="mt-2 position-tag">Software Engineer</h3>
        <p class="mt-3 info">A software engineer with hands-on experience in developing web and native mobile applications using different architectures.
          I currently work Tensorflow to integrate machine learning in android applications</p>
      </div>
    </div>
    <div class="col-sm-6 align-self-center order-first p-4">
      <div class="text-center">
        <img src="../assets/passport.png" class="img-fluid rounded" alt="Samuel Ajibade's Image">
      </div>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col">
      <h3 class="main">Projects</h3>
      <h5 class="mt-1 subtitle">Most Recent Works</h5>
    </div>
    <div class="row mt-4" style="margin-bottom: 50px; margin-top: 100px">
      <div class="col-sm-6 align-self-center order-first">
        <div class="text-center">
          <img src="../assets/diabetesPredictionCover.svg" alt="Diabetes Prediction App Logo" class="img-fluid" width="2160" height="1080" style="border-radius: 20px;">
        </div>
      </div>
      <div class="col-sm-6 align-self-center">
        <h3 class="product-name">Diabetes Prediction App</h3>
        <p class="product-info">predicts diabetes mellitus type 2 with the aid of machine learning. Written in Flask, Html, CSS.</p>
        <a rel="noreferrer" target="_blank" href="https://diabetes-diagnosis.herokuapp.com/" style="text-decoration: none">
          <h5 class="link-custom">
            Visit Website
          </h5>
             </a>
      </div>
    </div>
  </div>
  <div class="row mt-4" style="margin-bottom: 50px;">
    <div class="col-sm-6 align-self-center order-lg-first">
      <h3 class="product-name">Acefood</h3>
      <p class="product-info">android application that predicts up to 10 classes of tomato disease using computer vision. Built with Tensorflow and Kotlin</p>
      <a rel="noreferrer" href="https://appdistribution.firebase.dev/i/35977fe24f0d2b11" target="_blank" style="text-decoration: none">
          <h5 class="link-custom">
            Download Application
          </h5>
      </a>
    </div>
    <div class="col-sm-6 align-self-center mt-4 order-first">
      <div class="text-center">
        <img src="../assets/acefoodCover.svg" alt="Acefood's Logo" class="img-fluid" width="2160" height="1080" style="border-radius: 20px;">
      </div>
    </div>
  </div>
  <div class="row mt-4 pb-4">
    <div class="col-sm-6 align-self-center order-first">
      <div class="text-center">
        <img src="../assets/cocoadecCover.svg" alt="Cocoadec Logo(Brown Variant)" class="img-fluid" width="2160" height="1080" style="border-radius: 20px;">
      </div>
    </div>
    <div class="col-sm-6 align-self-center">
      <h3 class="product-name">Cocoadec</h3>
      <p class="product-info">User Interface Design for Cocoa Disease Prediction Website</p>
      <a href="#" style="text-decoration: none">
        <h5 class="link-custom" >Launch Website</h5>
      </a>
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

.mt-custom {
  margin-top: 200px;
  margin-bottom: 10px;
}


@media only screen and (max-width: 768px) {
  /* For Mobile Devices */
  .mt-custom {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
  }
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
  font-size: 14px;
  width: 170px;
  height: 52px;
  margin-top: 12px;
  margin-bottom: 20px;
  color: #FFFFFF;
  border-radius: 20px;
}

.btn-warning:hover {
  background-color: rgba(199, 199, 199, 0.1);
  border-color: #FFB037;
  color: #FFB037;
}

@media only screen and (max-width: 768px) {
  /* For Mobile Devices */
  .name-tag {
    text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
  }

  .position-tag {
    color: #FFFFFF;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    opacity: 0.7;
  }

  .info {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #FFFFFF;
  }

  .main {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #3B3B3B;
  }

  .subtitle {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-weight: 800;
    font-style: normal;
    font-size: 18px;
    color: #B2B0B0;
  }

  .product-name {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #3B3B3B;
    margin-top: 10px;
  }

  .product-info {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: rgba(53, 53, 53, 0.71);
  }

  .link-custom {
    color: #FFB037;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    text-decoration: none;
  }
}

</style>
