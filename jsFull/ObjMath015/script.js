let num1 = 9.555556;

//Arredonda o número para baixo
let num2 = Math.floor(num1);
console.log(num2);

//Arredonda para cima
let num3 = Math.ceil(num1);
console.log(num3);

// Arredonda para o mais próximo
let num4 = Math.round(num1);
console.log(num4);

// Pegar o maior número de uma sequência
console.log(Math.max(1, 10, 100, 500, 5, -5, -10, 23, 25, 50, 400));
// E menor número
console.log(Math.min(1, 10, 100, 500, 5, -5, -10, -10, 23, 25, 50, 400));

// Gera um número aleatório. Isso é para estabelecer a margem que o número aleatório deve estar
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// Valor PI
console.log(Math.PI * 10);

// Raiz quadrada
console.log(Math.sqrt(20));

// Potência com Math == **
console.log(Math.pow(8, 2));

// Dividir número por 0 == Infinity
console.log(100 / 0);

