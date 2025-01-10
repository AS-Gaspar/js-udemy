// Cuidado aos detalhes, este asterismo (*) abaixo é o que diferencia uma função geradora de uma função comum
function* geradora() {
    // Código qualquer...
    yield 'Valor 1'
    // Código qualquer...
    yield 'Valor 2'
    // Código qualquer...
    yield 'Valor 3'
}

const g1 = geradora() 
for (let valor of g1) {
    console.log(valor)
}

