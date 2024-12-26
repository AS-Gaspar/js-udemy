//               0  1  2  3  4  5  6  7  8 
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]
//                                 Operador rest
const [primeiroNumero, segundoNumero, ...resto] = numeros
// Pegando o primeiro valor, o segundo valor e o restante dos valores
console.log(primeiroNumero, segundoNumero, resto) // 1 2 [3, 4, 5, 6, 7, 8, 9]

console.log('-------------------')

// Para pegar valores específicos
const [um, , tres, , cinco, , sete] = numeros
// Pegando os valores 100, 300, 500 e 700
console.log(um, tres, cinco, sete) // 100 300 500 700

console.log('-------------------')

// Para acessar o valor de um array dentro de outro array
const arrayDeArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Pegando o valor 6
const [,[,,seis]] = arrayDeArray
console.log(seis)

// Outra forma é retirando o array de dentro do array, e depois pegando o elemento
const [,, lista3] = arrayDeArray
const [, oito] = lista3
console.log(oito) // 8