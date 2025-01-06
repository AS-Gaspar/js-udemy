// Funcões de Callback são funções executadas após o término de outra função
const min = 1000
const max = 3000

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, randomNum(min, max))
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, randomNum(min, max))
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, randomNum(min, max))
}

// Exemplo de Callback Hell, onde as funções são chamadas uma dentro da outra

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Olá, Mundo!')
//         })
//     })
// })

// --------------------------------------------

// Exemplo de Callback Hell, onde as funções são chamadas uma após a outra

f1(f1callback)

function f1callback() {
    f2(f2callback) 
}

function f2callback() {
    f3(f3callback) 
}

function f3callback() {
    console.log('Olá, Mundo!')
}