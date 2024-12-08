// Função construtora do objeto pessoa

function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
};

// Criação dos objetos pessoa

const pessoa1 = criaPessoa("Alexandre", "Silvestri", 21);
const pessoa2 = criaPessoa("Etenorio", "Silvestri", 59);
const pessoa3 = criaPessoa("Sonia", "Tunni", 44);

// Input dos objetos pessoas

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);

// Criação de objeto com método dentro

const academia = {
    local: "Bombinhas",
    professores: 5,
    alunos: 500,
    treinosRealizados: 0,

    executarTreino() {
        console.log(`${this.alunos} alunos disseram que o de hoje está pago!`);
    },

    incrementaTreino() {
        this.treinosRealizados++
    }
};

academia.executarTreino();
academia.incrementaTreino();
academia.incrementaTreino();
academia.incrementaTreino();
academia.incrementaTreino();
academia.incrementaTreino();
console.log(academia.treinosRealizados);