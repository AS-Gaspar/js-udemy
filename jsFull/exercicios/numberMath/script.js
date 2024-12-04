let numero = prompt("Digite um número: ");
numero = Number(numero);
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)} <br />`
document.body.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)} <br />`;
document.body.innerHTML += `É NaN: ${Number.isNaN(numero)} <br />`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} <br />`;
document.body.innerHTML += `Arredondando par cima: ${Math.ceil(numero)} <br />`;
document.body.innerHTML += `Com duas casas decimais ${numero.toFixed(2)} <br />`;