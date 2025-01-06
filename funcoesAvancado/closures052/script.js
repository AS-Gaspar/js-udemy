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