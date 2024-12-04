//  INDICES  0123456
let valor = "Palavra";
let frase = "O dia tá lindo";

// Concatenação
console.log(valor.concat(' qualquer'));
console.log(valor + ' QUALQUER');
console.log(`${valor} kualker`);

// Descobrir posição do index
// Começa da esquerda para direita
console.log(valor.indexOf('a', 3));
// Começa da direita para esquerda
console.log(valor.lastIndexOf('a', 3));

// Substituir 
console.log(valor.replace('Palavra', 'Word'));

// Descobrir o tamanho da String
console.log(valor.length);

// Pegar um pedaço do texto
console.log(valor.slice(1, 4));

// Dividir uma frase
console.log(frase.split(' ', 3));

// Colocar em caixa alta
console.log(frase.toUpperCase());
// Colocar em minúscula 
console.log(frase.toLowerCase());

