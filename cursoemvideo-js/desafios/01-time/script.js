function londing (){
    var now = new Date()
    var hour = now.getHours()
    var min = now.getMinutes()
    var time = document.getElementById('time')
    var box = document.getElementById('box')
    var photo = document.getElementById('image')
    
    if (hour < 12){
        document.body.style.backgroundColor = '#db7d34'
        box.style.color = '#db7d34'
        box.style.backgroundColor = 'white'
        time.innerText = `Good Morning! It's ${hour}:${min}`
        photo.src = 'img/bomdia.jpg'
    } else if (hour < 18){
        document.body.style.backgroundColor = '#e27059'
        box.style.color = '#e27059'
        box.style.backgroundColor = 'white'
        time.innerText = `Good Afternoon! It's ${hour}:${min}`
        photo.src = 'img/boatarde.jfif'
    } else {
        document.body.style.backgroundColor = '#0f1b2b'
        box.style.color = '#0f1b2b'
        box.style.backgroundColor = 'white'
        time.innerText = `Good Everning! It's ${hour}:${min}`
        photo.src = 'img/boanoite.jpg'
    }
}