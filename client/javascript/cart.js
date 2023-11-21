// count

// const { json } = require("body-parser");
// const axios= require('axios');
const incre = document.getElementsByClassName('incre');
const decre  = document.getElementsByClassName('decre');

for(let i = 0; i < incre.length; i++){
    let btn = incre[i];
    btn.addEventListener('click',function(event){
        let btnClick = event.target;
        let counter = btnClick.parentElement.parentElement.children[1];
        counter.innerHTML = parseInt(counter.innerHTML) + 1;

        // total cost

        const individualCost = document.querySelectorAll('.total span');
        const count = document.querySelectorAll('.quantity span');

        const totalCost = document.querySelector('#cost');
        const subtotal = document.querySelector('#subcost');
        let total = 0;

        for(let i = 0; i < individualCost.length; i++){
            total += individualCost[i].innerHTML * count[i].innerHTML;
            totalCost.innerHTML = total;
            subtotal.innerHTML = total;
        }
    });
    let btn2 = decre[i];
    btn2.addEventListener('click',function(event){
        let btnClick = event.target;
        let counter = btnClick.parentElement.parentElement.children[1];
        if(counter.innerHTML > 0)
        counter.innerHTML = parseInt(counter.innerHTML) - 1;

        // total cost

        const individualCost = document.querySelectorAll('.total span');
        const count = document.querySelectorAll('.quantity span');

        const totalCost = document.querySelector('#cost');
        const subtotal = document.querySelector('#subcost')
        let total = 0;

        for(let i = 0; i < individualCost.length; i++){
            total += individualCost[i].innerHTML * count[i].innerHTML;
            totalCost.innerHTML = total;
            subtotal.innerHTML = total;
        }
    });
}

// total cost

const individualCost = document.querySelectorAll('.total span');
const count = document.querySelectorAll('.quantity span');

const totalCost = document.querySelector('#cost');
const subtotal = document.querySelector('#subcost')
let total = 0;

for(let i = 0; i < individualCost.length; i++){
    total += individualCost[i].innerHTML * count[i].innerHTML;
    totalCost.innerHTML = total;
    subtotal.innerHTML = total;
}
