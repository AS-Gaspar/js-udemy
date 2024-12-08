/*
Valores primitivos (imutáveis): 
String - Number - Boolean - undefined - Null - Infinity - BigInt - Symbol 
(São valores copiados)

Referência (mutável): 
Array - Object - Function 
(São valores passados por referência ao mesmo local na memória)
*/

// Exemplo de valor imutável

let variavelPrincipal = 10;
let variavelSecundaria = variavelPrincipal;

variavelPrincipal += 20;

console.log(variavelPrincipal, variavelSecundaria);

// Exemplo de valor mutável

let arrayPrincipal = [1, 2, 3];

let arraySecundario = arrayPrincipal;
// Para fazer a cópia do array, utilizar [...arrayPrincipal]
// Mesma coisa no caso de objetos {...objeto}

arrayPrincipal.push(4);

console.log(arrayPrincipal);
console.log(arraySecundario);





