const numeros = [5, 50, 80, 1, 2, 4, 6, 8, 7, 11, 16, 22, 27]
// Pegando o array de números, filtrando apenas os numeros pares com filter, dobrando esses valores com map, e reduzindo todos os valores para um único valor com reduce
const numerosParesDobrados = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((valorTotal, valor) => valorTotal + valor) 

console.log(numerosParesDobrados)