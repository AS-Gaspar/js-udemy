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

// Gerador infinito
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

function* geradorOrdenado() {
    yield function() {
        console.log('Vim do y1')
    }

    yield function() {
        console.log('Vim do y2')
    }

    yield function() {
        console.log('Vim do y3')
    }
}

const geradorOutput = geradorOrdenado() 
const func1 = geradorOutput.next().value
const func2 = geradorOutput.next().value
const func3 = geradorOutput.next().value

func1()
func2()
func3()
