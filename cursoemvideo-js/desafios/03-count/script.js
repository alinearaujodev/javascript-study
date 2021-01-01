function contar(){
    var comeco = document.getElementById('inicio')
    var final = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resultado')
    var c = Number(comeco.value)
    
    // validação dos campos - verificar se campos estao vazios
    if (Number(comeco.value) == '' || Number(final.value) == ''){
        res.innerText = 'Impossivel contar'
    }

    // validação dos campos - verificar se campo passo é maior que 0
    if (Number(passo.value) == 0){
        alert('Passo invalido! Considerando PASSO 1')
    }

    // Fazer a contagem
    res.innerText = 'Contando... '
    do {
        res.innerText = `${c} `
        c = c + Number(passo.value)
    } while (c<=Number(final.value))
}