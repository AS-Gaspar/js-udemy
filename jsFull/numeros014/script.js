let num1 = 10;
let num2 = 200;

//Tranformar temporariamente um número, de Number para String
console.log(num1.toString() + num2);
console.log(typeof num1);

// Converter um numero do tipo Number para String
// num1 = num1.toString();

// Inputar número em binário
console.log(num1.toString(2));

// Definir quantidade de casas decimais que devem aparecer
console.log(num1.toFixed(4));

//Booleano para verificar se um número é Inteiro ou não é um NaN
console.log(Number.isInteger(num1));
let und = num1 * "WTF";
console.log(Number.isNaN(und));

// IEEE 754-2008
let decimal = 0.7;
let addDecimal = 0.1;
decimal += addDecimal; // 0.8
decimal += addDecimal; // 0.9
decimal += addDecimal; // 1.0
console.log(decimal);
// Evitar problema de inprecisão de números decimais 
decimal = Number(decimal.toFixed(2));
console.log(decimal);
