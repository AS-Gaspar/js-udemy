let numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementsByClassName('numero-titulo');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const floor = document.getElementById('floor');
const ceil = document.getElementById('ceil');
const fixed = document.getElementById('fixed');


numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}</p>`;
raiz.innerHTML = Math.sqrt(numero);
inteiro.innerHTML = Number.isInteger(numero);
nan.innerHTML = Number.isNaN(numero);
floor.innerHTML = Math.floor(numero);
ceil.innerHTML = Math.ceil(numero);
fixed.innerHTML = numero.toFixed(2);