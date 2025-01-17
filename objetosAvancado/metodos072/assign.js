// assign é um método que serve para copiar as propriedades de um objeto para outro objeto
const produto = { nome: 'Camiseta', preço: 50, material: 'poliester' }
const replica = Object.assign({}, produto, {marca: "adidas"} )

console.log(produto)
console.log(replica)