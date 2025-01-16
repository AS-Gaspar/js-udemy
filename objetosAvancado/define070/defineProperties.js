function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1) // Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
console.log(Object.keys(p1)) // [ 'nome', 'preco', 'estoque' ] 
console.log(p1.nome)
console.log(p1.preco)
console.log(p1.estoque)