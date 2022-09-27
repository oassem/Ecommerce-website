function homePopulateData(category) {
    let objectsArr = [{
            id: "1",
            category: "laptop",
            title: "Dell G15 Gaming laptop",
            image: "./images/L1.jpg",
            price: 17750,
            miniDescription: "Intel Core i5-10500H 6Cores, 8GB RAM, 512GB SSD, Nvidia Geforce GTX1650 4GB GDDR6 Graphics",
            fullDescription: `Dell G15 15-5510 Gaming laptop - Intel Core i5-10500H 6Cores, 8GB RAM, 512GB SSD, Nvidia Geforce GTX1650 4GB GDDR6 Graphics, 15.6" FHD IPS 120 Hz, Backlit Keyboard, UBUNTU - Shadow Grey. Good Quality with a high end`
        },
        {
            id: "2",
            category: "laptop",
            title: "Dell Vostro 3510 laptop",
            image: "./images/L2.jpg",
            price: 20000,
            miniDescription: "11th Gen Intel core i7-1165G7, 16GB RAM, 1TB HDD + 256GB SSD, Nvidia GeForce MX350 GDDR5 Graphics",
            fullDescription: `Dell Vostro 3510 laptop - 11th Gen Intel core i7-1165G7, 16GB RAM, 1TB HDD + 256GB SSD, Nvidia GeForce MX350 GDDR5 Graphics, 15.6" FHD (1920 x 1080) An ti-glare LED Narrow Border, Ubuntu - Carbon Black. Good Quality with a high end`
        },
        {
            id: "3",
            category: "laptop",
            title: "HP Pavilion Gaming Laptop",
            image: "./images/L3.jpg",
            price: 10500,
            miniDescription: "11th Intel Core i7-11370H, 16GB RAM, 1 TB PCIe NVMe SSD, NVIDIA GeForce RTX 3050 4GB GDDR6 Graphics",
            fullDescription: `HP Pavilion Gaming Laptop 15-dk2018ne - 11th Intel Core i7-11370H, 16GB RAM, 1 TB PCIe NVMe M.2 SSD, NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics, 15.6" FHD (1920 x 1080) IPS 144 Hz, Dos - black. Good Quality with a high end`
        },
        {
            id: "4",
            category: "mobile",
            title: "Samsung Galaxy M52",
            image: "./images/M1.jpg",
            price: 8000,
            miniDescription: `Samsung Galaxy M52 5G Black, RAM 8 GB, 128 GB, Smartphone Dual SIM Mobile Phone, Colour: Off White`,
            fullDescription: `The multi-lens camera on the Galaxy M52 5G takes photos to the next level. Get crisper, clearer shots with the 64MP OIS Camera, expand your viewing angle with the Ultra Wide Camera, customize focus with the Depth Camera and get closer to details with the Macro Camera.`
        },
        {
            id: "5",
            category: "mobile",
            title: "Samsung Galaxy A23",
            image: "./images/M2.jpg",
            price: 6200,
            miniDescription: `Samsung Galaxy A23 Dual SIM Blue 6GB RAM 128GB 4G, Dual SIM Mobile Phone, Awesome White`,
            fullDescription: `Feast your eyes on vibrant details with the FHD+ Super AMOLED display. With the expansive 6.5-inch Infinity-O Display, enjoy vivid outdoor visibility up to 800 nits while reducing blue light with the Eye Comfort Shield.`
        },
        {
            id: "6",
            category: "mobile",
            title: "Samsung Galaxy A53",
            image: "./images/M3.jpg",
            price: 12300,
            miniDescription: `Samsung Galaxy A53 5G Mobile Phone SIM Free Android Smartphone, 256GB, 8GB RAM, Dual SIM Mobile Phone, Awesome Blue`,
            fullDescription: `Time to get to work. Powered with a 5nm Octa-core processor, your Galaxy is built to handle heavy-duty multitasking. RAM Plus reads your usage patterns and provides extra virtual RAM for an additional boost.`
        }
    ];

    let htmlProduct = document.getElementById('homeProductMain');
    htmlProduct.innerHTML = null;
    localStorage.setItem("products", JSON.stringify(objectsArr));
    localStorage.setItem("selectedID", null);
    for (var i = 0; i < objectsArr.length; i++) {
        if (objectsArr[i].category == category || !category) {
            let htmlProductContent = `<div class="col-md-4 col-sm-12 mb-3">
        <div class="card" style="padding:0;">
        <img class="card-img-top" src="${objectsArr[i].image}">
        <div class="card-body">
            <h5 class="card-title">${objectsArr[i].title}</h5>
            <p class="card-text">${objectsArr[i].miniDescription}</p>
            <button href="#" class="btn btn-primary mt-1" onclick="homeRedirect(this)">Product Details</button>
            <p hidden>${objectsArr[i].id}<p>
        </div>
        </div>
        </div>`;
            htmlProduct.innerHTML += htmlProductContent;
        }
    }
}

function homeRedirect(e) {
    localStorage.setItem("selectedID", e.nextElementSibling.innerText);
    window.location = './productDetails.html';
}

homePopulateData();