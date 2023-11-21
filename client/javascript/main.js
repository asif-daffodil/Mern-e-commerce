// provide section color change effect

const pcard = document.getElementsByClassName('provide-card');
const icons = document.getElementsByClassName('i');
const cartbutton = document.getElementById('cart-button');
// const axios= require('axios');10
let products = []
let cartItems = []

function changecolor() {
    pcard[1].classList.add('cardcolor');
    pcard[0].classList.remove('cardcolor');
    for (let i = 0; i < 7; i++) {
        icons[i].classList.remove('logowhite');
    }
    for (let i = 7; i < 14; i++) {
        icons[i].classList.add('logowhite');
    }
}

function removecolor() {
    pcard[1].classList.remove('cardcolor');
    pcard[0].classList.add('cardcolor');
    for (let i = 0; i < 7; i++) {
        icons[i].classList.add('logowhite');
    }
    for (let i = 7; i < 14; i++) {
        icons[i].classList.remove('logowhite');
    }
}

pcard[1].addEventListener('mouseover', changecolor);
pcard[1].addEventListener('mouseout', removecolor);

// search location dropdown

let arrow_box = document.getElementById('arrow-downBox');

let arrow_down = document.getElementById('drop-icon');
arrow_down.addEventListener('click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (arrow_box.style.display == 'none')
        arrow_box.style.display = 'block';
    else
        arrow_box.style.display = 'none';
});

//location detection

const city = document.getElementById('city');

const successfulLookup = (position) => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=6fb98deaf8b54d719c0330a5a44a6ac3`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('city', (data.results[0].components.city));
            const cityName = localStorage.getItem('city');
            city.innerHTML = `${cityName}`;
        });
}

arrow_box.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
});

if (localStorage.getItem('city') != null) {
    const cityName = localStorage.getItem('city');
    city.innerHTML = `${cityName}`;
}

let cart = document.getElementById('cart');
//CART FUNCTIONS
function getcart(name, price, url, con, btncart) {
    const item = {
        name: name,
        price: price,
        url: url,
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"))
    if (storage == null) {
        products.push(item)
        localStorage.setItem("cart", JSON.stringify(products))
    }
    else {
        products = JSON.parse(localStorage.getItem("cart"))

    }
}

function addToCart(productName) {
    const username = JSON.parse(localStorage.getItem('user')).username;
    console.log("Test Cart")
    // Get the data from the form or any other source
    const data = {
        username: username,
        productName: productName,
        quantity: 1,
        price: 100
    };

    // Send the POST request using Axios
    fetch('/api/consumer/cart', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            // Optionally update the UI to reflect the changes in the cart
        })
        .catch(error => {
            console.error(error);
            // Optionally display an error message to the user
        });

}
