//userdata

// let user = JSON.parse(localStorage.getItem('user'));

document.getElementById('name').innerHTML = `<h1>${user.username}</h1>`;

//navboxes

let navBoxes = document.getElementsByClassName('navboxes');
let orders = document.getElementById('myOrders');
let edit = document.getElementById('editProducts');
let editbtn = document.getElementById('edit');


function myOrdersShow() {
	navBoxes[0].classList.add('navcolor');
	navBoxes[1].classList.remove('navcolor');
    orders.classList.add('show');
    edit.classList.remove('show');
}

function editShow() {
	navBoxes[1].classList.add('navcolor');
	navBoxes[0].classList.remove('navcolor');
	orders.classList.remove('show');
    edit.classList.add('show');
}

navBoxes[0].addEventListener('click',myOrdersShow);
navBoxes[1].addEventListener('click',editShow);
editbtn.addEventListener('click',editShow);

//edit profile

const nameEdit = document.getElementById('name-edit');
const phoneEdit = document.getElementById('phone-edit');
const emailEdit = document.getElementById('email-edit');

nameEdit.value = `${user.username}`;
phoneEdit.value = `${user.phone}`;
emailEdit.value = `${user.email}`;


const saveBtn = document.getElementById('save');

function saveChanges(event){
	event.preventDefault();
	user.username = nameEdit.value;
	const userUpdated = JSON.stringify(user);
	localStorage.setItem('user',userUpdated);
}

saveBtn.addEventListener('click',saveChanges);

//location

let upCity = localStorage.getItem('city');

document.getElementById('up-city').innerHTML = `${upCity}`;