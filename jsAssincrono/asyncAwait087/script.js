// Em alguma situações, é melhor utilizar promises com then e catch
// Em outras situações, é melhor utilizar async await
/*
Estados de async e await:
    Pending: estado inicial, ainda não foi resolvida e nem rejeitada
    Fulfilled: quando a promise é resolvida
    Rejected: quando a promise é rejeitada
*/

function rand(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { 
         setTimeout(() => {
            if (typeof msg !== 'string') {
            reject('Erro')
            return
        }
            resolve(msg.toUpperCase())
            return
         }, tempo)
    })
}

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return esperaAi('Fase 3', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//     })
//     .catch(e => {
//         console.log('ERRO', e)
//     })

// async await é uma forma de consumir promises de forma mais simples
async function executa() {
    try {
    const fase1 = esperaAi('Fase 1', rand())
    console.log(fase1)
    setTimeout(() => {
        console.log('Essa promise estava pendente', fase1)
    }, 1100)    

    const fase2 = await esperaAi('Fase 2', rand())
    console.log(fase2)

    const fase3 = await esperaAi(/*'Fase 3'*/ 2, rand())
    console.log(fase3)

    console.log('Terminamos na fase 3', fase3)
    } catch(e) {
        console.log(e)
    }
}

executa()