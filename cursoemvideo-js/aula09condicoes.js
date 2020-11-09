var name = 'Aline'
var now = new Date()
var time = now.getHours()


if (time < 12){
    var hi = 'Good Morning'
} else if (time <=18){
    var hi = 'Good Afternoon'
} else {
    var hi = 'Good Night'
}

console.log(`${hi}, ${name}`)

// IF ELSE IF
var age = 10
console.log(`${name}, você tem ${age} anos,`)
if (age >= 18){
    console.log(`é obrigada a votar`)
} else if(age >15){
        console.log(`pode votar se quiser`)
    } else {
            console.log(`não pode votar`)
    }

// SWITCH
var today = new Date()
var week = today.getDay()

switch(week){
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log('Segunda')
    break
    case 2:
        console.log('Terça')
    break
    case 3:
        console.log('Quarta')
    break
    case 4:
        console.log('Quinta')
    break
    case 5:
        console.log('Sexta')
    break
    case 6:
        console.log('Sabado')
    break
}