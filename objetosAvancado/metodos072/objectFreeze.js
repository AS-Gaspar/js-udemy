const produto = { nome: 'Camiseta', preço: 50, material: 'poliester' }
// Objetivo: congelar um objeto para que não seja possível alterar suas propriedades.
Object.freeze(produto)
const replica = { ...produto, material: 'algodão' }

console.log(produto)
console.log(replica)