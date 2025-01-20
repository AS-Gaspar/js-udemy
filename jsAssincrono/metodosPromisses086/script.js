function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Valor inválido')
                return
            } 
            resolve(msg.toUpperCase())
            return
         }, tempo)
    })
}

// Metodos Promisses:

const promises = [ 
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    esperaAi(1000, rand(1, 3)),
]

// all - Retorna todas as promisses resolvidas
Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
})
.catch(function(erro) {
    console.log(erro)
})

// race - Retorna a primeira promisse que for resolvida
Promise.race(promises)
    .then(function(valor) {
        console.log(valor)
})
.catch(function(erro) {
    console.log(erro)
})

// resolve
function baixaPagina() {
    const emCache = false

    if(emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO', e))
    