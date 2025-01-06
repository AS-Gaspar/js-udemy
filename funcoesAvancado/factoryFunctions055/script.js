// Funções que retornam objetos
// Constructor function (Função construtora)
// Introduzindo this. O this é um objeto que representa o objeto que está sendo chamado naquele momento.

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            // Vai retornar um array com nome e sobrenomes separados (Input = ['João', 'Mario', 'Cesar'])
            valor = valor.split(' ')
            // Retira o primeiro nome do array e atribui a this.nome (Input = João Silvestri)
            this.nome = valor.shift()
            console.log(valor)
        },

        fala(assunto) {
            return `${nome} está ${assunto}.`
        },

        altura: a,
        peso: p,
        // get faz com que a função seja chamada como um atributo do objeto
        /*get*/ imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}   

const p1 = criaPessoa('Alexandre', 'Silvestri', 1.80, 70)
console.log(`Imc = ${p1.imc()}`)
// console.log(p1.imc)
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'João Mario Cesar'
console.log(p1.nomeCompleto)
const p2 = criaPessoa('Joaquim', 'Vieira', 1.95, 102)
console.log(p2.nomeCompleto)
console.log(p1.fala('falando sobre JS'))