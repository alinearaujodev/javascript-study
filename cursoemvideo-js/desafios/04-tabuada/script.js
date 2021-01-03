function calcular(){
    var num = document.getElementById('num')
    var res = document.getElementById('resultado')
    var c

    for (c=0; c<=num; c++){
        res.innerHTML = `${num} X ${c} = ${num*c} `
    }
}