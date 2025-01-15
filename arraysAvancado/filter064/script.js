// Filter sempre retorna um array com a mesma quantidade de elementos ou menos

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]

const filtroDeNumeros = (filtro) => {
    const numerosFiltrados = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > filtro) {
            numerosFiltrados.push(numeros[i])
        }
    }
    return numerosFiltrados
}
console.log(filtroDeNumeros(10))

// Função de callback 
 function callbackFilter(valor, indice, array) {
     return (valor > 10)
}

// Função anônima
const anonimaFiltrados = numeros.filter(function(valor) {
     return valor > 10
 })

// Callback com arrow function
const arrowFiltrados = numeros.filter(valor => valor > 10)

console.log(anonimaFiltrados)
console.log(arrowFiltrados)

