let number = document.querySelector('input#num')
let list = document.querySelector('select#list')
let res = document.querySelector('div#res')
let all = []

function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function add(){
    if (isNumber(number.value) && !inList(number.value, all)){
        all.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Number ${num.value} add.`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (all.length == 0 ){
        alert('Erro! Lista vazia, adicione valores.')
    } else{
        let tot = all.length
        let maior = all[0]
        let menor = all[0]
        let media = 0
        let soma = 0

        for (let pos in all) {
            soma += all[pos]
            
            if (all[pos] > maior){
                maior = all[pos]
            }else if(all[pos] < menor){
                menor = all[pos]
            }              
        }

        media = soma/tot 

        res.innerHTML = ''
        res.innerHTML += `<h3>Relatório de Finalização dos Números</h3>`
        res.innerHTML += `<p>Ao todo, foram adicionado ${tot} números</p>`
        res.innerHTML += `<p>Maior número: ${maior}</p>`
        res.innerHTML += `<p>Menor número: ${menor}</p>`
        res.innerHTML += `Soma: ${soma}`
        res.innerHTML += `Média: ${media}`

    }
}