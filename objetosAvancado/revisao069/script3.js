// Factory functions / Contructor functions / Classes

// Factory functions
const criaPessoa = (nome, sobrenome) => {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Alexandre', 'Silvestri')
// Altera o sobrenome do objeto
p1.sobrenome = 'Tunni'
console.log(p1.nomeCompleto)

// Construtor function
function Cliente(nome, sobrenome) {
    // this serve para referenciar o objeto que está sendo criado
    this.nome = nome
    this.sobrenome = sobrenome 
}

const cliente1 = new Cliente('Alexandre', 'Silvestri')
console.log(cliente1)
