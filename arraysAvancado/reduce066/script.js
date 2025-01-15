// Somar todos os números do array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosSoma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)

console.log(numerosSoma)