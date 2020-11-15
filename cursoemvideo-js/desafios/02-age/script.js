function verificar(){
    var now = new Date()
    var atual = now.getFullYear()
    var year = document.getElementById('year')

    if (year.value.length == 0 || year.value > atual){
        alert('Erro! Verifique os dados e tente novamente')
    } else {
        var res = document.getElementById('age')
        var sexo = document.getElementsByName('sexo')
        var idade = atual - Number(year.value) 
        var genero = ''
        var photo = document.getElementById('image')

        if (sexo[0].checked){
            genero = 'Homem'
            if (idade <=12){
                photo.src = 'boy.jpg'
            }  else if (idade > 12 && idade <=20){
                photo.src = 'young-man.jpg'
            }  else if (idade > 20 && idade <=55){
                photo.src = 'man.jpg'
            } else if (idade > 55){
                photo.src = 'old-woman.jpg'
            } 
        } else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade <= 12){
                photo.src = 'girl.jpg'
            } else if (idade > 12 && idade <=20){
                photo.src = 'young-woman.jpg'
            } else if (idade > 20 && idade <=55){
                photo.src = 'woman.jpg'
            } else if (idade > 55){
                photo.src = 'old-woman.jpg'
            }
        }

        res.innerHTML = `Verificamos que você é ${genero} e tem ${idade} anos`
        res.appendChild(photo)
    }

}

