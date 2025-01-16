// Objeto com construtor
const pessoa1 = new Object()
pessoa1.nome = 'Alexandre'
pessoa1.sobrenome = 'Silvetri'
pessoa1.idade = 21
pessoa1.falarNome = function() {
    return `${this.nome} é o meu nome!`
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade - 1
}

delete pessoa1.sobrenome
const nome = pessoa1.falarNome()
console.log(nome)
const nascimento = pessoa1.getDataNascimento()
console.log(`Nasci no ano de ${nascimento}!`)

for (let chave in pessoa1) {
    console.log(chave, pessoa1[chave])
    
}