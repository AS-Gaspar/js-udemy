// value pega os valores de um objeto e retorna em um array
const produto = { nome: 'Camiseta', preço: 50, material: 'poliester' }

console.log(produto)

// entries retorna um array com os valores do objeto
console.log(Object.entries(produto))

// destructor para pegar os valores do array
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}