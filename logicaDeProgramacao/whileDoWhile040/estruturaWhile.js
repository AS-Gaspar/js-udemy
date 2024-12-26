let i = 0

while ( i <= 10 ) {
    console.log(i)
    i++ // necessário declarar o incremento para não cair em loop infinito
} // 0 1 2 3 4 5 6 7 8 9 10

const cidades = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Curitiba', 'Manaus']

let contador = 0
while ( contador <= cidades.length ) {
    console.log(cidades[contador])
    contador++
}