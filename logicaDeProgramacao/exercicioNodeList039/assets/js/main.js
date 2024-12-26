const escopoDeParagrafos = document.querySelector('paragrafos')
const paragrafos = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody 
    p.style.color = "white"
}