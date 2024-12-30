// Todo retorno é o encerramento da função

// Função que retorna um objeto
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const pessoa1 = criaPessoa('Alexandre', 'Silvestri')
console.log(pessoa1)

// função dentro de função
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))