// Existe um limite de recursividade, que é de 10.338 chamadas. Se passar disso, o navegador vai parar de executar o código.
function recursiva(max) {
    if (max >= 10338) return
    max++
    console.log(max)
    recursiva(max) 
}

recursiva(-10)