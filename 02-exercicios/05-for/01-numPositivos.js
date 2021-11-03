// Exercício 01 
/*
Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. Em seguida, apresente a quantidade de valores positivos digitados.
*/

let quantPositivos = 0;
for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario = gets()


  // TODO Incrementar a "quantidadePositivos" somente SE o "valorInformadoPeloUsuario" for positivo.
  if (valorInformadoPeloUsuario >=0){
    quantidadePositivos++;
  } 

}

console.log(`${quantidadePositivos} valores positivos`);