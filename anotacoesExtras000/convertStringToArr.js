// Utilizando toString() + split() com o método map() para transformar um array de strings em um array de números.
var num = 123456;
var digits = num.toString().split('');
var realDigits = digits.map(Number)
console.log(realDigits)

