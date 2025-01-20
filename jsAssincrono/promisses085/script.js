function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('Error')) 
         setTimeout(() => {
            resolve(msg)
         }, tempo)
    })
}

esperaAi('Conexão com DB', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Buscando dados da BASE', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(/*'Tratando os dados'*/ 222, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Exibe os dados na tela')
    })
    .catch(e => {
        console.log('ERRO:', e)
    })