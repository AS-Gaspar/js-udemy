// Getter serve para obter o valor de um atributo
// Setter serve para definir o valor de um atributo

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        // value: estoque, // valor
        // writable: true, // pode alterar o valor
        get: function() {
            return estoquePrivado
        },
        set: function(valor) {
            // Evita que o valor atribuido não seja um  número
            if (typeof valor !== 'number') {
                console.log('Valor Inválido')
            } else {
                estoquePrivado = valor
            }
            
        },
        configurable: true // configurável 
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            // Remove a palavra Tramontina
            valor = valor.replace('Tramontina', '')
            nome = valor
        }        
    }
}

function quantidadeProduto(quantidade) {
    const estoqueAtual = 500 
    return {
        get quantidade() {
            return quantidade
        },
        set quantidade(valor) {
            if (typeof valor !== 'number') {
                console.log('Valor Inválido')
            } else {
                quantidade = valor + estoqueAtual
            }
        }        
    }
}

// const p1 = new Produto('Camiseta', 20, 3)
// p1.estoque = 10
// console.log(p1.estoque) 
const p2 = criaProduto('Camiseta')
p2.nome = 'Carrinho de mão Tramontina'
const q2 = quantidadeProduto()
q2.quantidade = 100
console.log(p2.nome + '= ' + q2.quantidade + ' unidades')





