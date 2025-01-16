// defineProperty é um método que define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto modificado.

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode ser modificado
        configurable: false // não pode ser reconfigurado
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 5000
delete p1.estoque // não deleta 
console.log(Object.keys(p1))// mostra as chaves
console.log(p1)