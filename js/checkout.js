let cart = JSON.parse(localStorage.getItem('cart'));
let totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
let totalPriceElement = document.getElementById('grandPrice');
let content = document.getElementById('checkoutContent');
totalPriceElement.innerHTML = `<b>Total Price:</b> ${numberWithCommas(totalPrice)} EGP`;

cart.forEach(function (item, index) {
    let itemDisplayed = `<div class="d-flex justify-content-around mt-5" style="text-align: center">
    <div class="w-25">${item.id}</div>
    <div class="w-25">${item.title}</div>
    <div class="w-25">${numberWithCommas(item.price)} EGP</div>
    <div class="w-25">${item.quantity}</div>
    <div class="w-25">${numberWithCommas(item.quantity * item.price)} EGP</div>
    </div>`;
    content.innerHTML += itemDisplayed;
});

const cartbtn = document.querySelector("#cartButton");
cartbtn.addEventListener("click", cartRedirect);
function cartRedirect(event) {
    event.preventDefault();
    window.location = './cart.html';
}

const confirmbtn = document.querySelector("#submit");
confirmbtn.addEventListener("click", confirm);
function confirm(event) {
    event.preventDefault();
    alert('Your purchase process is successful and you will be redirected to home page :)');
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location = './index.html';
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}