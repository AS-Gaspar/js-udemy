const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 15},
    {nome: 'Alexandre', idade: 21},
    {nome: 'Mario', idade: 21},
    {nome: 'Eduardo', idade: 54}
]

const idades = pessoas.map(valor => valor.idade)
console.log(idades)

// Adicionando id aos elementos
const idPessoas = pessoas.map(function(valor, indice) {
    const newPessoa = {...valor }
    newPessoa.id = indice
    return newPessoa
})
console.log(idPessoas)