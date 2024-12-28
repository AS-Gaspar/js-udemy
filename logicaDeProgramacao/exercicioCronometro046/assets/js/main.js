const getTimeFromSeconds = (miliseconds) => {
    const data = new Date(miliseconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

// console.log(getTimeFromSeconds(10))

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let seconds = 0;
let timer;

const startTimer = () => {
    timer = setInterval(function() {
        seconds++
        relogio.innerHTML = getTimeFromSeconds(seconds)
    }, 1000)
}


document.addEventListener('click', function(e) {
    const element = e.target
    if (element.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        seconds = 0
    }

    if (element.classList.contains('pausar')) {
        relogio.classList.add('pausado')
    clearInterval(timer)
    }

    if (element.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        startTimer()
    }
})
