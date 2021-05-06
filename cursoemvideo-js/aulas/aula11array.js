let a = [1, 2, 3] // colocando valores no indice 

a[3] = 9 // adicionando no indice 3 o valor 9

a.push(7) // adicionando o valor 7 na ultima posição do vetor

a.length // saber o comprimento do vetor 

a.sort() // colocar todos os vetores em ordem crescente 

// mostrar vetor
for (let i=0; i<a.length; i++){
    console.log(a[i])
}

for (let i in a){
    console.log(a[i])
}

// buscar um vetor
let a = [1, 2, 3]

let j = a.indexOf(3)

console.log(`o valor 3 esta no posicao ${j} `)