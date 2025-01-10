// Cuidado aos detalhes, este asterismo (*) abaixo é o que diferencia uma função geradora de uma função comum
function* geradora() {
    // Código qualquer...
    yield 'Valor 1'
    // Código qualquer...
    yield 'Valor 2'
    // Código qualquer...
    yield 'Valor 3'
}

// const g1 = geradora() 
// for (let valor of g1) {
//     console.log(valor)
// }

// Gereador infinito
function* geradorInfinito() {
    let i = 0

    while (true) {
        yield i
        i++
    }
}

const geradorDeNumeros = geradorInfinito()

console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)
console.log(geradorDeNumeros.next().value)

// Exemplo de gerador que delega tarefas
function* geradorDeTarefas() {
    yield 'Tarefa 1'
    yield 'Tarefa 2'
    yield 'Tarefa 3'
}

// 
function* importaTarefa() {
    yield* geradorDeTarefas()
    yield 'Tarefa 4'
    yield 'Tarefa 5'
}

const tarefas = importaTarefa()
for (let valor of tarefas) {
    console.log(valor)
}

