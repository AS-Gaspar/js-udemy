const pessoas = [
    { nome: 'José', idade: 30 },
    { nome: 'Maria', idade: 20 },
    { nome: 'Alexandre', idade: 21 },
    { nome: 'Ana', idade: 24 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Paula', idade: 38 },
    { nome: 'Etenório', idade: 59 }
]

const nomesGrandes = pessoas.filter(nomes => nomes.nome.length > 5)
const idadeAcimaDeTrinta = pessoas.filter(valor => valor.idade > 30)
const nomesComA = pessoas.filter(valor => valor.nome.toLocaleLowerCase().indexOf('a') === 0)
console.log(nomesGrandes)
console.log(idadeAcimaDeTrinta)
console.log(nomesComA)