const form= document.getElementById('signup-seller-form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const formData = new FormData(form)
    const username = formData.get('username')
    const email=formData.get('email')
    const password = formData.get('password')
    const phone = formData.get('phone')
    const user = {
        username,
        password,
        email,
    }
    fetch('/api/seller', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(createdUser => {
        console.log(createdUser)
        window.location.href = "/login-seller.html"
    })
})