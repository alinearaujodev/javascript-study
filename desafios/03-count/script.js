function contar(){
    var comeco = document.getElementById('inicio')
    var final = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resultado')
    
    // validação dos campos
    if (comeco.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        alert('Erro! Falta dados')
    } else {
        // Fazer a contagem
        res.innerHTML = 'Contando... <br>'
        var c = Number(comeco.value)
        var f = Number(final.value)
        var p = Number(passo.value)

        // validar campo passo maior que 0
        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        
        if (c > f) {
            // contagem decrecente
            for (var i = c; i>=f; i-=p){
                res.innerHTML += `\u{1F449} ${i} `
            }
        } else {
            // contagem crescente
            for (var i = c; i<=f; i+=p){
                res.innerHTML += `\u{1F449} ${i} `
            }
           
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}