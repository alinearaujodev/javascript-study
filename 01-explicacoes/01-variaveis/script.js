// Exibir valores de saída
alert('Janela de alerta no navegador')
confirm('Deseja realmente sair?')
prompt('Qual seu nome?')
console.log('Hello world')
document.write('Oi')

// Declarando as variáveis
var variavel; // Aqui como não foi definido o valor, a variavel será tratada como undefined

// No JS não precisa de tipagem, portanto você somente precisa declarar o nome da variável e seu valor
var numero = 1;

// Tipo de Variaveis 
var num = 5; // Number
var vouF = false; // Boolean: Falso
var Vouf = true; // Boolean: Verdadeiro
var nome = 'Aline'; // String: Caracter 
var nullVar = null; // Null: Variável sem valor
var und; // Undefined: variável foi declarada, pórem não recebeu nenhum valor
console.log('Meu nome é', nome);

// Escopo global e local
var global = 'global';
console.log(global)

function escopolocal(){
    let local = 'local';
    console.log(local)
}
