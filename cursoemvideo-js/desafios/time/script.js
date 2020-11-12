var now = new Date()
var hour = now.getHours()
var min = now.getMinutes()
var time = document.getElementById('time')
var box = document.getElementById('box')
var corpo = document.getElementById('body')

if (hour < 12){
    corpo.style.backgroundImage = 'https://image.freepik.com/fotos-gratis/vista-fantastica-do-nascer-do-sol-sobre-as-nuvens-vistas-da-janela-do-aviao_76000-2233.jpg'
    box.style.backgroundColor = '#a3b40b'
    time.innerText = `Good Morning! It's ${hour}:${min}`
} else if (hour < 18){
    box.style.backgroundColor = '#aa521f'
    time.innerText = `Good Afternoon! It's ${hour}:${min}`
} else {
    box.style.backgroundColor = '#060747'
    time.innerText = `Good Everning! It's ${hour}:${min}`
}