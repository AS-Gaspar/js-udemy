const nome = "Airton";
const sobrenome = "Lucas";
const idade = 23;
const peso = 75;
const alturaEmMetro = 1.80;
let imc; // peso / altura * altura
imc = peso / (alturaEmMetro * alturaEmMetro);
console.log(`Nome: ${nome} ${sobrenome}, Idade: ${idade}, Peso: ${peso} Kg, Altura: ${alturaEmMetro}, IMC: ${imc}.`);