<<<<<<< HEAD
function retornaFuncao(nome = 'Alexandre') {
    return function() {
        return nome
    }   
}

/* 
Closures é o escopo criado quando uma função é declarada.
Esse escopo permite a função acessar e manipular variáveis externas à função.
*/
// Aqui o Closure da função fecha com o nome 'Mario'
const funcao = retornaFuncao('Mario')
// Aqui o Closure da função fecha com o nome 'Luigi'
const funcao2 = retornaFuncao('Luigi')
console.log(funcao()) 
console.log(funcao2())
=======
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
>>>>>>> f5131555284d09f087f76781598b5f59f77c11c9
