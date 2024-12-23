var num = 123456;
var digits = num.toString().split('');
var realDigits = digits.map(Number)
console.log(realDigits);