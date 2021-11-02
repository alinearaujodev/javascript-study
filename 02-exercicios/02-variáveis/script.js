const s1 = prompt('Digite o primeiro número:')
const s2 = prompt('Digite o segundo número:')

const num1 = Number(s1)
const num2 = Number(s2)

document.write('Os valores e os tipos são iguais: ', num1 === num2) // SABER SE OS VALORES E TIPOS SÃO OS MESMOS
document.write(' | Soma: ', num1+num2)
document.write(' | O segundo número é maior que o primeiro: ', num2 > num1)
document.write(' | A soma está entre 10 e 16: ', (num1+num2) >= 10 && (num1+num2) <=16)

