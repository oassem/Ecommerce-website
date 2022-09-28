var ID=JSON.parse(localStorage.getItem("selectedID"));
var totalPriceOfAllObjectsInCart =0 ;
console.log(`Selected id is ${ID}`);
if (localStorage.getItem("products")) {
    objectsArr = JSON.parse(localStorage.getItem("products"));
}

objectsArr.forEach(product=>{
  
    for(var key in product){
       
        if (key=='id'){
          
            if(product.id==ID){
                console.log(product);
                cartItem={
                    remove: 0,
                    Image:product.image,
                    Product:product.title,
                    Price:product.price,
                    Quantity:1,
                    Total:product.price
                };
                var cart=JSON.parse(localStorage.getItem('cart_items'));
                
                if(cart==null) cart=[];
                cart.push(cartItem);
                cart=localStorage.setItem("cart_items",JSON.stringify(cart));
                // console.log(product);
              
            }
        }
    }});

let cartArr = [];
if (JSON.parse(localStorage.getItem("cart_items"))) {
    cartArr = JSON.parse(localStorage.getItem("cart_items"));
}
// cartArr.forEach(element => {
//     console.log(element);
// });

let tbody = document.getElementById("tbody");
let bsection= document.getElementById("cart-bottom");

//loop on array of objects in cart :) 
cartArr.forEach((element,index)=>{
    
       let tr = document.createElement('tr');
       // add remove button 
      
     console.log(index);
       let remove_td = document.createElement('td');
       remove_td.innerHTML =`<i data-id="${ID}" onclick="removeElement('${index}')" class="remove_btn  fas fa-times-circle" aria-hidden="true"></i>`;
        tr.appendChild(remove_td);

       // add image
        let img_td = document.createElement('td');
        img_td.innerHTML =`<img class="card-img-top" src="${element.Image}">`;
        tr.appendChild(img_td) ;  


        //  add title 
        let title_td = document.createElement('td');
        title_td.textContent = element.Product;
        tr.appendChild(title_td);

         //item price
        let price_td = document.createElement("td");
        price_td.textContent = element.Price+" L.E";
        tr.appendChild(price_td);

        //items quantity
        let qty_td = document.createElement('td');
        qty_td.innerHTML =`<i data-id="${ID}" class="decrease fas fa-minus-circle" aria-hidden="true" ></i>
                           <span >${element.Quantity}</span>
                           <i data-id="${ID}" class="increase fas fa-plus-circle" aria-hidden="true" ></i>`;
        tr.appendChild(qty_td);


          //total per item  
        let total_td = document.createElement("td");
        total_td.textContent = element.Price * element.Quantity +" L.E";
        tr.appendChild(total_td);
        totalPriceOfAllObjectsInCart+= parseInt(element.Price * element.Quantity);
        tbody.appendChild(tr);
        console.log(totalPriceOfAllObjectsInCart);
       
        
});
console.log(totalPriceOfAllObjectsInCart);

var cartPrice=localStorage.setItem('totalPriceofAllObjectsInCart',totalPriceOfAllObjectsInCart);

var cartPrice=localStorage.getItem('totalPriceofAllObjectsInCart');
console.log(cartPrice);

let b_title = document.createElement('div');
b_title.innerHTML = `<div class="total col-lg-6 col-md-6 col-12">
    <h5>Total</h5>
    <div class="title d-flex justify-content-between">
        <h6>Subtotal</h6>
        <p>${parseInt(cartPrice)} L.E</p>
    </div>

    <div class="title d-flex justify-content-between">
        <h6>Shipping</h6>
        <p>50 L.E</p>
    </div>
    <hr class="second-hr">
    <div class="title d-flex justify-content-between">
        <h6>Total</h6>
        <p>${parseInt(cartPrice)+50} L.E</p>
    </div> 
    <a href="index.html"><button  class="home_btn btn btn-primary mt-1 ml-auto" > <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To Home</button></a> 
    <a href="checkout.html"><button class="proceed_btn btn btn-primary mt-1 ">Proceed To checkout</button></a> 
</div>`;
bsection.appendChild(b_title);
// **********************************
//remove element in cart 
function removeElement(index){
   // console.log(index);// index of object
cartArr=JSON.parse(localStorage.getItem("cart_items"));
removedItemPrice=cartArr[index];
for(var key in removedItemPrice){
    if(key=='Price'){
        removedItemPrice=removedItemPrice[key];
        console.log(removedItemPrice);
    }
}
// console.log(removedItemPrice);
// console.log(totalPriceOfAllObjectsInCart);

cartArr.splice(index,1);

localStorage.setItem("cart_items",JSON.stringify(cartArr));
totalPriceOfAllObjectsInCart= totalPriceOfAllObjectsInCart - removedItemPrice;
console.log(totalPriceOfAllObjectsInCart);

   cartPrice=localStorage.setItem('totalPriceofAllObjectsInCart',JSON.stringify(totalPriceOfAllObjectsInCart));
 
cartPrice=JSON.parse(localStorage.getItem('totalPriceofAllObjectsInCart'));
cartPrice=parseInt(cartPrice);
console.log(cartPrice);

// show items in the screen after delete :)

let tbody = document.getElementById("tbody");
let bsection= document.getElementById("cart-bottom");
tbody.innerHTML=null;
bsection.innerHTML=null;
  cartArr.forEach(element=>{
    console.log(element);
    let tr = document.createElement('tr');
    // add remove button 
    let remove_td = document.createElement('td');
    remove_td.innerHTML =`<i data-id="${ID}" onclick="removeElement('${element.Product}')" class="remove_btn  fas fa-times-circle" aria-hidden="true"></i>`;
     tr.appendChild(remove_td);

    // add image
     let img_td = document.createElement('td');
     img_td.innerHTML =`<img class="card-img-top" src="${element.Image}">`;
     tr.appendChild(img_td) ;  


     //  add title 
     let title_td = document.createElement('td');
     title_td.textContent = element.Product;
     tr.appendChild(title_td);

      //item price
     let price_td = document.createElement("td");
     price_td.textContent = element.Price+" L.E";
     tr.appendChild(price_td);

     //items quantity
     let qty_td = document.createElement('td');
     qty_td.innerHTML =`<i data-id="${ID}" class="decrease fas fa-minus-circle" aria-hidden="true" ></i>
                        <span >${element.Quantity}</span>
                        <i data-id="${ID}" class="increase fas fa-plus-circle" aria-hidden="true" ></i>`;
     tr.appendChild(qty_td);


       //total per item  
     let total_td = document.createElement("td");
     total_td.textContent = element.Price * element.Quantity +" L.E";
     tr.appendChild(total_td);
     totalPriceOfAllObjectsInCart+= parseInt(element.Price * element.Quantity);
     tbody.appendChild(tr);
     console.log(totalPriceOfAllObjectsInCart);
    
     
});
console.log(totalPriceOfAllObjectsInCart);



 cartPrice=localStorage.getItem('totalPriceofAllObjectsInCart');
console.log(cartPrice);

let b_title = document.createElement('div');
if(parseInt(cartPrice)>0){
    b_title.innerHTML = `<div class="total col-lg-6 col-md-6 col-12">
    <h5>Total</h5>
    <div class="title d-flex justify-content-between">
        <h6>Subtotal</h6>
        <p>${parseInt(cartPrice)} L.E</p>
    </div>
   
    <div class="title d-flex justify-content-between">
        <h6>Shipping</h6>
        <p>50 L.E</p>
    </div>
    <hr class="second-hr">
    <div class="title d-flex justify-content-between">
        <h6>Total</h6>
        <p>${parseInt(cartPrice)+50} L.E</p>
    </div> 
    <a href="index.html"><button  class="home_btn btn btn-primary mt-1 ml-auto" > <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To Home</button></a> 
    <a href="checkout.html"><button class="proceed_btn btn btn-primary mt-1 ">Proceed To checkout</button></a> 
   </div>`;
   bsection.appendChild(b_title);
}
if(parseInt(cartPrice)==0){
    b_title.innerHTML = `<div class="total col-lg-6 col-md-6 col-12">
    <h5>Total</h5>
    <div class="title d-flex justify-content-between">
        <h6>Subtotal</h6>
        <p>0 L.E</p>
    </div>
   
    <div class="title d-flex justify-content-between">
        <h6>Shipping</h6>
        <p>50 L.E</p>
    </div>
    <hr class="second-hr">
    <div class="title d-flex justify-content-between">
        <h6>Total</h6>
        <p>${parseInt(cartPrice)+50} L.E</p>
    </div> 
    <a href="index.html"><button  class="home_btn btn btn-primary mt-1 ml-auto" > <i class="fa fa-arrow-left" aria-hidden="true"></i> Back To Home</button></a> 
    <a href="checkout.html"><button class="proceed_btn btn btn-primary mt-1 ">Proceed To checkout</button></a> 
   </div>`;
   bsection.appendChild(b_title);
}

  console.log(cartArr);
 
  
  
}
