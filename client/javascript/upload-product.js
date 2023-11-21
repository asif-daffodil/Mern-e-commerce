const form= document.getElementById('upload-product')
form.addEventListener('submit',function(event){
    event.preventDefault()
    const formData = new FormData(form)
    const name = formData.get('name')
    const description=formData.get('description')
    const sellername=formData.get('sellername')
    const price = formData.get('price')
    const image = formData.get('image')
    const user = {
        name,
        description,
        sellername,
        price,
        image
    }
    fetch('/api/seller/upload', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(createdUser => {
        console.log(createdUser)
        window.location.href = "http://localhost:3000"
    })
})