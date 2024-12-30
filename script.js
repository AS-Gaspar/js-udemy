// digits = [1,2,3]

const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

const algorithm = (digits) => {
    let integer = BigInt(digits.join(''))
    integer++
    let digitsPlusOne = Array.from(integer.toString()).map(Number)
    return digitsPlusOne
}

console.log(algorithm(digits))

   