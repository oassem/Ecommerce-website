// check if cart is already created
if (localStorage.getItem("cart") === null) {
    let cartArr = [];
    localStorage.setItem("cart", JSON.stringify(cartArr));
}

// initalize some variables
let totalPriceOfAllObjectsInCart = 0;
let objectsArr = JSON.parse(localStorage.getItem("products"));
let tempArr = JSON.parse(localStorage.getItem("cart"));
let flag = false;

// check if user has selected new item
if (JSON.parse(localStorage.getItem("selectedID")) != null) {
    let ID = JSON.parse(localStorage.getItem("selectedID"));
    tempArr.forEach(function (arrayItem) {
        if (arrayItem.id == ID) { flag = true; }
    });
    if (!flag) {
        let selectedItem = objectsArr.find((item) => item.id == ID);
        selectedItem.quantity = 1;
        tempArr.push(selectedItem);
        localStorage.setItem("cart", JSON.stringify(tempArr));
    }
    localStorage.setItem("selectedID", null);
}

function setPageContent() {
    let tbody = document.getElementById("tbody");
    let bsection = document.getElementById("cart-bottom");
    tbody.innerHTML = null;
    bsection.innerHTML = null;

    tempArr.forEach((e, index) => {
        let tr = document.createElement('tr');
        let remove_td = document.createElement('td');
        remove_td.innerHTML = `<i data-id="${e.id}" onclick="removeElement('${index}')" class="remove_btn  fas fa-times-circle" aria-hidden="true"></i>`;
        tr.appendChild(remove_td);

        //add image
        let img_td = document.createElement('td');
        img_td.innerHTML = `<img class="card-img-top" src="${e.image}">`;
        tr.appendChild(img_td);

        //add title 
        let title_td = document.createElement('td');
        title_td.textContent = e.title;
        tr.appendChild(title_td);

        //item price
        let price_td = document.createElement("td");
        price_td.textContent = e.price + " EGP";
        tr.appendChild(price_td);

        //items quantity
        let qty_td = document.createElement('td');
        qty_td.innerHTML = `<i data-id="${e.id}" class="decrease fas fa-minus-circle" aria-hidden="true" onclick='dec(${index})'></i>
                               <span>${e.quantity}</span>
                               <i data-id="${e.id}" class="increase fas fa-plus-circle" aria-hidden="true" onclick='inc(${index})'></i>`;
        tr.appendChild(qty_td);

        //total per item  
        let total_td = document.createElement("td");
        total_td.textContent = e.price * e.quantity + " EGP";
        tr.appendChild(total_td);
        tbody.appendChild(tr);
    });

    let b_title = document.createElement('div');
    b_title.innerHTML = `<div class="total col-lg-6 col-md-6 col-12">
    <h5>Total</h5>
    <div class="title d-flex justify-content-between">
        <h6>Subtotal</h6>
        <p>${getTotalPrice()} EGP</p>
    </div>

    <div class="title d-flex justify-content-between">
        <h6>Shipping</h6>
        <p>50 EGP</p>
    </div>
    <hr class="second-hr">
    <div class="title d-flex justify-content-between mb-2">
        <h6>Total</h6>
        <p>${totalPriceOfAllObjectsInCart + 50} EGP</p>
    </div> 
    <a href="index.html"><button class="home_btn btn btn-primary mt-1 ml-auto"></i> Back To Home</button></a> 
    <button class="proceed_btn btn btn-primary mt-1" onclick='cartRedirect()'>Proceed To checkout</button>
    </div>`;
    bsection.appendChild(b_title);
}


function getTotalPrice() {
    totalPriceOfAllObjectsInCart = 0;
    tempArr.forEach(function (arrayItem) {
        totalPriceOfAllObjectsInCart += arrayItem.price * arrayItem.quantity;
    });
    return totalPriceOfAllObjectsInCart;
}

function removeElement(index) {
    tempArr.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(tempArr));
    setPageContent();
}

function dec(index) {
    if (tempArr[index].quantity > 1) {
        tempArr[index].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(tempArr));
        setPageContent();
    }
}

function inc(index) {
    tempArr[index].quantity += 1;
    localStorage.setItem("cart", JSON.stringify(tempArr));
    setPageContent();
}

function cartRedirect() {
    localStorage.setItem("totalPrice", totalPriceOfAllObjectsInCart);
    window.location = './checkout.html';
}

setPageContent();