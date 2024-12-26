function makeRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const min = 1
const max = 50
let randomNumber = makeRandomNumber(1, 50)

while (randomNumber !== 10) {
    randomNumber = makeRandomNumber(min, max)
    console.log(randomNumber)
}