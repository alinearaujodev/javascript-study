function verificar(){
    var now = new Date()
    var atual = now.getFullYear()
    var year = document.getElementById('year')
    var res = document.querySelector('div#age')

    // SABER SE ANO É VALIDO
    if (year.value.length == 0 || Number(year.value) > atual){
        alert('Erro! Verifique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = atual - Number(year.value)
        var genero = ''
        var photo = document.createElement('img')
        photo.setAttribute('id', 'foto')

        // CONDIÇÃO PARA SEXO MASCULINO
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade <=12){
                photo.setAttribute('src', 'boy.jpg')
            }  else if (idade > 12 && idade <=20){
                photo.setAttribute('src', 'young-man.jpg')
            }  else if (idade > 20 && idade <=55){
                photo.setAttribute('src', 'man.jpg')
            } else if (idade > 55){
                photo.setAttribute('src', 'old-man.jpg')
            } 
        } else{
            // CONDIÇÃO PARA SEXO FEMININO
            genero = 'Mulher'
            if (idade <= 12){
                photo.setAttribute('src', 'girl.jpg')
            } else if (idade > 12 && idade <=20){
                photo.setAttribute('src', 'young-woman.jpg')
            } else if (idade > 20 && idade <=55){
                photo.setAttribute('src', 'woman.jpg')
            } else if (idade > 55){
                photo.setAttribute('src', 'old-woman.jpg')
            }           
        }
        res.innerHTML = `Verificamos que você é ${genero} e tem ${idade} anos`  
        res.appendChild(photo)
    }

}

