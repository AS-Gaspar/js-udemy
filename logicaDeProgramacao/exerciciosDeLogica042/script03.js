const numeroDivisivel = (num) => {
    
    // Checa se é um número
    if (typeof num !== "number") {
        return "Não é um número"
    }

    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
    if (num % 3 === 0) return "Fizz"
    if (num % 5 === 0) return "Buzz"
    return num
}

// checa se cada um dos numeros de 0 a 100 são divisiveis por 3, por 5, ou ambos!
for (let i = 0; i <= 100; i++) {
    console.log(i, numeroDivisivel(i))
}


