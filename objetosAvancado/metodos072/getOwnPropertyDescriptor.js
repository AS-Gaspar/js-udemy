// Objetivo: retorna um objeto com as propriedades de um objeto 
const produto = { nome: 'Camiseta', preço: 50, material: 'poliester' }

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
Object.defineProperty(produto, 'marca', {
    value: 'Nike',
    writable: false,
    enumerable: true,
    configurable: true
})
console.log(Object.getOwnPropertyDescriptor(produto, 'marca'))
