//navbar

const navbar = document.getElementById('navbar');

function checkscroll() {
    if (window.pageYOffset != 0) {
        navbar.classList.add("nav-move");
    }
    else {
        navbar.classList.remove("nav-move");
    }
}
window.addEventListener('scroll', checkscroll);

//profile

let dropProfile1 = document.querySelectorAll('.profile i')[0];
let dropProfile2 = document.querySelectorAll('.profile i')[1];
let profile1 = document.getElementsByClassName('profile-card')[0];
let profile2 = document.getElementsByClassName('profile-card')[1];

dropProfile1.addEventListener('click', function () {
    if (profile1.style.display == 'none')
        profile1.style.display = 'flex';
    else
        profile1.style.display = 'none';
});

dropProfile2.addEventListener('click', function () {
    if (profile2.style.display == 'none')
        profile2.style.display = 'flex';
    else
        profile2.style.display = 'none';
});

//user Profile data showing in navbar

const user = JSON.parse(localStorage.getItem('user'));

// after log in

if(localStorage.getItem('user')){
    const profileCard = `
                    <div class="profile-card-img"><img src="images/dp.jpg"></div>
                    <div class="profile-card-name"><h4>${user.username}</h4></div>
                    <div id="profile-card-email"><p>${user.email}</p></div>
                    <div>
                        <button type="button" onclick="location.href='profile-seller'">Profile Dashboard</button>
                        <button type="button" onclick="logOut()">Log Out</button>
                    </div>
`;
    document.getElementsByClassName('profile-card')[0].innerHTML = profileCard;
    document.getElementsByClassName('profile-name')[0].innerHTML = `<p>${user.username}</p>`;
    document.getElementsByClassName('profile-card')[1].innerHTML = profileCard;
    document.getElementsByClassName('profile-name')[1].innerHTML = `<p>${user.username}</p>`;
    document.getElementsByClassName('login-signup-btn')[0].style.display = 'none';
    document.getElementsByClassName('profile')[0].style.display = 'block';
    document.getElementsByClassName('login-signup-btn')[1].style.display = 'none';
    document.getElementsByClassName('profile')[1].style.display = 'block';
}

//log out

function logOut(){
    localStorage.removeItem('user');
    document.getElementsByClassName('profile-card')[0].innerHTML = ``;
    document.getElementsByClassName('profile-name')[0].innerHTML = ``;
    document.getElementsByClassName('profile')[0].style.display = 'none';
    document.getElementsByClassName('login-signup-btn')[0].style.display = 'block';
    document.getElementsByClassName('profile-card')[1].innerHTML = ``;
    document.getElementsByClassName('profile-name')[1].innerHTML = ``;
    document.getElementsByClassName('profile')[1].style.display = 'none';
    document.getElementsByClassName('login-signup-btn')[1].style.display = 'block';
}

//hamberger

function showHam(){
    if(document.getElementById('hamberger-body').style.display == 'none')
        document.getElementById('hamberger-body').style.display = 'flex';
    else
        document.getElementById('hamberger-body').style.display = 'none';
}