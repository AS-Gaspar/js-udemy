const nome = "Alex"; // String
const numero = 10; // Number
const numeroReal = 10.10 // Number
/* 
As duas são variáveis sem valor, porém Null, é declarada 
sem valor explicitamente, enquanto undefined 
é apenas declarada, sem atribuição nenhuma
*/
let variavelSemAtribuicao; // Undefined -> não aponta para nenhum local na memória
let variavelSemValor = null; // Null -> não aponta para nenhum local na memória
const booleanTrue = true // Boolean (variável de tipo lógico)
const booleanFalse = false // Boolean (variável de tipo lógico)

console.log(typeof nome, nome)
console.log(typeof numeroReal, numeroReal)

let a = [1, 2, 3];
const b = a;
console.log(a, b);
a.push(4);
console.log(a, b);