const frutas = ['Maçã', 'Pêra', 'Uva', 'Morango', 'Banana'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let i in frutas) {
    console.log(frutas[i]);
}

const quarto = [
    {nome: 'Cama', preco: 500},
    {nome: 'Guarda-roupa', preco: 1000},
    {nome: 'Mesa', preco: 300},
    {nome: 'Cadeira', preco: 150}
]

for (let i in quarto) {
    console.log(quarto[i].nome);
    console.log(quarto[i].preco);
}

// exemplo de for in com objeto ( for of não funciona com objetos)

const pessoa = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// for in retorna com o index do valor, e for of retorna o valor em si

