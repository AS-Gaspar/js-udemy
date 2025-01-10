// Delete remove um elemento de um array, mas não reordena os índices
const nomes = ['João', 'Maria', 'José', 'Helena', 'Rafael', 'Daniel']
delete nomes[5]
console.log(nomes) // ['João', 'Maria', 'José', 'Helena', 'Rafael', <1 empty item>]

// [...nomes] com spread operator, cria uma cópia do array, e agora, o valor alterador em copiaNome não afeta o array original.
const copiaNome = nomes
copiaNome.pop()
console.log(nomes) // ['João', 'Maria', 'José', 'Helena', 'Rafael']

// Tamanho do array
console.log(nomes.length)

// Pop remove o último elemento, e shift remove o primeiro.
nomes.pop()
console.log(nomes) // ['João', 'Maria', 'José', 'Helena']
nomes.shift()
console.log(nomes) // ['Maria', 'José', 'Helena']

// Push adiciona um elemento no final do array, e unshift adiciona um elemento no início.
nomes.push('Alexandre')
console.log(nomes) // ['Maria', 'José', 'Helena', 'Alexandre']
nomes.unshift('Emanuel')
console.log(nomes) // ['Emanuel', 'Maria', 'José', 'Helena', 'Alexandre']

// Splice remove elementos de um array, e pode adicionar novos elementos.
const nomesSplice  = nomes.splice(1, 3)
console.log(nomesSplice) // ['Maria', 'José', 'Helena']

const nomeCompleto = 'Alexandre Willian Tunni Silvestri'
// Split transforma uma string em um array, e o argumento é o separador.
const nomeSplit = nomeCompleto.split(' ') 
console.log(nomeSplit) // ['Alexandre', 'Willian', 'Tunni', 'Silvestri']

// Join transforma um array em uma string, e o argumento é o separador.
const nomeJoin = nomeSplit.join(' ')
console.log(nomeJoin) // 'Alexandre Willian Tunni Silvestri'