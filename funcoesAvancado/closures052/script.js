// Closures é a capacidade de uma função lembrar do ambiente em que foi criada
function retornaFuncao(nome) {
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao('Lucas');
const funcao2 = retornaFuncao('João');
console.log(funcao());
console.log(funcao2());