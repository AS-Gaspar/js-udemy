function makeRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const min = 1
const max = 50
let random = 10;

do {
    random = makeRandomNumber(min, max)
    console.log(random)
} while (random !== 10)