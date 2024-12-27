// finally é executado sempre, independente de erro ou não
try {
    console.log('Abri o arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log(erroGerado)
    console.log('Fechar arquivo')
} catch (e) {
    console.log('Tratando erro')
} finally {
    console.log('Finally: Eu sempre sou executado.')
}