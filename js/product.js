function displayFunc() {

  let productPage = document.getElementById('productPage');
  productPage.innerHTML = null;
  productArr = JSON.parse(localStorage.getItem("products"));
  idNumber = JSON.parse(localStorage.getItem("selectedID")) - 1;
  console.log(productArr)
  console.log(idNumber)
  let productDisplay = `<div class="container mt-10 pt-4 shadow-lg" style="padding-left:0%">
  <div class="row wow fadeIn">
      <div class="col-md-6 mb-4 shad" style="margin-left:0%">
          <div class="card" style="border:0">
              <div class="card-header me-0" style="background: radial-gradient(circle at 10% 20%, rgb(91, 140, 245) 0%, rgb(240, 131, 252) 79.4%);">
                  <p class="card-text text-center fs-1 fw-bolder">${productArr[idNumber].title}</p>
              </div>
              <img src="${productArr[idNumber].image}" class="card-img-top rounded-bottom" style="border-radius:0" width="300px" height="400px">
          </div>
      </div>
      <div class="col-md-6 mb-4 p-4 border shadow rounded">
          <p class="lead fs-1 text-center fw-bold">
              <span>${numberWithCommas(productArr[idNumber].price)} EGP</span>
          </p>
          <p class="lead text-bg-light text-primary fw-bold fs-5 text-center">SPECIFICATIONS</p>
          <p class="fs-6">${productArr[idNumber].fullDescription}</p>
          <div class="d-flex justify-content-left mt-5">
              <button class="btn btn-success btn-lg my-0 mx-auto" onclick="check()">Add to cart</button>
          </div>
      </div>
  </div>
</div>`;

  productPage.innerHTML += productDisplay
}

function check() {
  if (sessionStorage.getItem('LoginUser')) {
    window.location = './cart.html';
  } else {
    window.location = './signup.html';

  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

displayFunc();