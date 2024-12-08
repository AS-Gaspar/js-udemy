/*
 Aritméticos
  + Adição / Concatenação
  - Subtração 
  * Multiplicação 
  / Divisão
  ** Potenciação 
  % Resto da divisão
*/

const num1 = 25;
const num2 = 10;
const num3 = 10;
// Testar operadores
console.log(num1 % (num2 + num3));

let i = 0
i++;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);
i -= 3;
console.log(i);

// Exemplo de conversão com parseInt para número inteiro (Semântica)
// parseFloat para número decimal (Semântica)
// Number para ambas os tipos
let num = 10;
let stringToNum = parseInt("5.55");
console.log(num * stringToNum);
stringToNum = parseFloat("5.55");
console.log(num * stringToNum);
stringToNum = Number("10.50");
console.log(num * stringToNum);


