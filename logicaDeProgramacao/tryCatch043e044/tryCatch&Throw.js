// exemplo de estrutura try catch
// try {
//     console.log(naoExisto)
// } catch(err) {
//     console.log("err")
// }


// exemplo de utilização de throw, para lançar um erro
function soma(x, y) {
    if (typeof x == 'number' || typeof y !== 'number') {
        throw new TypeError ('x e y precisam ser números.')
    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma("1", 2))
} catch(err) {
    console.log(err)
    console.log('O valor digitado deve ser um número.')
}
