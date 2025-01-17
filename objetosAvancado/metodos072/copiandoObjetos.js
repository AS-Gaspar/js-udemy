// Copiando coisas de um objeto para outro
const produto = { nome: 'Camiseta', preço: 50, material: 'poliester' }
const replica = { ...produto, material: 'algodão' }

// Produto original
console.log(produto)
// Produto copiado
console.log(replica)