const mostraHora = () => {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// setInterval serve para repetir uma função a cada x milissegundos
const timer = setInterval(function() {
    console.log(mostraHora())
}, 1000)

// setTimeout serve para executar uma função após x milissegundos
setTimeout(function() {
    clearInterval(timer)
}, 10000)

setTimeout(function() {
    console.log('Olá mundo!')
}, 5000)