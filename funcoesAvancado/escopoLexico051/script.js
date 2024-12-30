// Descrição: arquivo criado para exemplificar o escopo léxico em JavaScript.

const execucao = 'Segunda opção de execução'

function falaNome() {
    const execucao = 'Executado'
    console.log(execucao)
}

// A função falaNome() irá imprimir 'Executado', pois a variável execucao declarada dentro da função tem escopo local
function usaFalaNome() {
    const execucao = 'Não será executado, pois declarar uma váriavel não afeta a execução de uma função externa'
    falaNome()
}

usaFalaNome()