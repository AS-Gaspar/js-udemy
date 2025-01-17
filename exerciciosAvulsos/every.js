const teste = ['w', 'e', 'r'];

const verifyIncludes = (teste) => {
    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']

    return (teste.every((char) => row1.includes(char)))
}

console.log(verifyIncludes(teste)) 
console.log(teste.join(""))