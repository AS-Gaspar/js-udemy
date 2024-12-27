const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exemplo de uso do continue
for (let numero of numeros) {
  if (numero === 2) {
    console.log("Pulei esse numero")
    continue
  }
  
  console.log(numero)

// Exemplo de uso do break
  if (numero === 7) {
    console.log("Numero 7 encontrado, encerrando a execução do loop")
    break
  }
}
