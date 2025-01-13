//               -5       -4       -3         -2        -1 
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(indice de inicio, quantidade de elementos a serem removidos, elementos a serem adicionados)

// remove o último elemento, pois utiliza -1

// const removidos = nomes.splice(-2, Number.MAX_VALUE)
// console.log(nomes, removidos)

// Adicionando elementos no inicio do array
nomes.splice(0, 0, 'Barbara', 'Lucas')
console.log(nomes)

// Adicionado e removendo um elemento em posição específica
nomes.splice(0, 1, 'Roberto') // Remove a Bárbara e adiciona o Roberto no lugar
console.log(nomes)
