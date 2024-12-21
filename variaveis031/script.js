// Variáveis do tipo "var" são globais, por isso, podem ser acessadas de qualquer lugar do código.
// Variáveis do tipo "let" são locais, só podem ser acessadas depois de serem declaradas, e dentro do bloco onde foram declaradas.
// Variáveis do tipo "const" são constantes e locais, ou seja, não podem ser alteradas.

// Exemplo de var e let

let verdadeira = true;

var nome = "João";
let sobrenome = "Silva";

if (verdadeira) {   
    var nome = "Pedro";
    let sobrenome = "Souza";
    console.log(nome, sobrenome);
}

// Irá buscar a variável nome dentro do bloco if, pois foi declarada com "var" que é global, e está mais próxima de a varivavel nome com atribuição "João". 
console.log(nome, sobrenome);

// Exemplo de constante

const inalteravel = "Não muda";

inalteravel = "Muda"; // Erro, pois a variável é constante e não pode ser alterada.



