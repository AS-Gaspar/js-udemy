// function ePaisagem(largura, altura) {
//     return largura > altura
// }

const ePaisagem = (largura, altura) => {
    return largura > altura
}

const imagem = {
    largura: 1920,
    altura: 1080
}

console.log(ePaisagem(imagem.largura, imagem.altura))