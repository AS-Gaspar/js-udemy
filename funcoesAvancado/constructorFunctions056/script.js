// Função construtora -> Contrói um objeto
// Função fábrica -> fábrica objetos
// Construtora -> Pessoa (new Pessoa)
function pessoa(nome = 'Nome não declarado', sobrenome = 'Sobrenome não declarado') {
    // Variáveis e metódos privados
    const ID = 123456
    const metodoInterno = function() {
        
    }

    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ' está estudando muito!!!')
    }
}

const p1 = new pessoa('Alexandre')
const p2 = new pessoa('Maria', 'Silva')

p1.metodo()
