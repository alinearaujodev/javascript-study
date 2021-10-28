function calcular(){
    var num = document.getElementById('num')
    var res = document.getElementById('resultado')

    // saber se campo esta vazio
    if (num.value.length == 0){
        alert('Erro! Campo vazio, digite um numero')
    }
    
    // Fazer a tabuada
    res.innerHTML = `A tabuada do <strong>${Number(num.value)}</strong>:<br>`
    for (var c=0; c<=10; c++){
        res.innerHTML += `${Number(num.value)} X ${c} = ${Number(num.value)*c} <br>`
    }
}