/*
Anotações:

- Funções podem recebem parâmetros, mesmo não possuindo valor padrão
- Arguments não funciona com arrow function, porém com operador rest, é possível obter o mesmo resultado
*/

// 1. Função sem parâmetro e sem retorno
const nothing = () => {
    console.log('1. Sem parâmetro e sem retorno')
}
nothing()

// 2. Função com parâmetro e sem retorno
const num1 = 5
const num2 = 10
const wParameter = (a, b) => {
    console.log(`2. Com parâmetro e sem retorno ${a + b}`)
}
wParameter(num1, num2)

// 3. Função sem parâmetro e com retorno
const wReturn = () => {
    return '3. Com retorno'
}
console.log(wReturn())

// 4. Função com parâmetro e com retorno
const wParameterReturn = (a, b) => {
    return a + " " + b
}
console.log(wParameterReturn('4. Com retorno', 'e com parâmetro'))

// Arguments
function plusArguments() {
    let sum = 0
    for (argument of arguments) {
        sum += argument
    }
    console.log(`Arguments`, sum)
}
plusArguments(1, 2, 3, 4, 5)

// parâmetros padrões, para evitar erros de undefined e NaN
function parametrosPadrao(a = 0, b = 0) {
    return a + b
}
console.log(parametrosPadrao(`Utilizando parâmetros padrão: `, 1))

// Atribuição via desestruturação

function desestruturacao({nome, sobrenome, idade}) {
    console.log(`Exemplo de atribuição via desestruturação: `, nome, sobrenome, idade)
}
desestruturacao({nome: 'Alexandre', sobrenome: 'Silvetri', idade: 21})

// Utilizando operador rest

function calculo(operador, acumulador, ...numeros) {
    for (numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    return acumulador
}
console.log(`Output função com operador rest:`, calculo('+', 0, 1, 2, 3, 4, 5))



