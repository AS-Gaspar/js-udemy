const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Santos',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

console.log(pessoa.nome) // Lucas

// Desestruturando o objeto
// Valores padrão são utilizados quando o valor não existe
const { idade = 18, endereco , nomePai = 'Aldair Ribeiro' } = pessoa
console.log(idade) // 30, pois o valor existe
console.log(endereco) // { rua: 'Av Brasil', numero: 320 }
console.log(nomePai) // Aldair Ribeiro, pois o valor não existe
