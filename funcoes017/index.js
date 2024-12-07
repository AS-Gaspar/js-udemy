// Função que retorna a soma de dois valores
function soma(x, y) {
    return x + y;
}

console.log(soma(10, 20));
console.log(soma(23, 23));
console.log(soma(64, -356));

/* 
Exemplo de arrow function que calcula Raix quadrada de um número:

const raiz = (n) => {
   return n ** 0.5;
};

*/

// Mesma função que está acima, porém simplificada
const raiz = n => n ** 0.5;

console.log(raiz(64));
console.log(raiz(16));
console.log(raiz(27));

