document.body.innerHTML += "Qualquer coisa <br />";
document.body.innerHTML += "Teste quebra de linha <br />";
document.body.innerHTML += "Só to escrevendo pra treinar mesmo kkkk <br />";
const nome = prompt("Type your first name: ");
document.body.innerHTML += `Your name is <strong>${nome}</strong>? <br />`;
document.body.innerHTML += `The second letter of your name is ${nome[1]} <br />`;
document.body.innerHTML += `Your name has ${nome.length} letters <br />`;
document.body.innerHTML += `What is the first a of your name? ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `What is the last a of your name? ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `The last 3 letters of your name is ${nome.slice(-3, nome.length)} <br/>`;
document.body.innerHTML += `Your name in upper case is ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Your name in power case is ${nome.toLowerCase()} <br />`;

