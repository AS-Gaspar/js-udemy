// IIFE -> Immediately Invoked Function Expression. Com este formato de função, o conteúdo da função fica protegido, não poluindo o escopo global, e é executado imediatamente após a sua declaração.

// É necessario colocar a função entre parenteses para que o JS entenda que é uma expressão de função, caso contrário, é gerado um erro de sintaxe.
(function(idade, peso, altura) {
    const sobrenome = 'Fracionado'
    
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Alexandre'))
    }

    falaNome()

})(21, 70, 1.80)

const nome = 'Alexandre'
console.log(nome)