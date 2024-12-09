/*
FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// Tudo que for diferente do que está dentro de FALSY, é TRUE;

// Exemplo de short circuit com && -> AND 

function falaOi() {
    return "oi";
};

const vaiExecutar = false;

// Irá retorna "oi", caso o valor da variável seja true
// Caso contrário, não retorna nada
vaiExecutar && console.log(falaOi());

// Exemplo de short circuit com OR -> ||
// Quando ele encontrar um valor True, a verificação vai parar, e o console retornará o valopr encontrdo
// console.log(false || NaN || !true || "Alexandre" || true);

const corSelecionada = "Vermelho";
const corDefault = "Preto";

// A cor selecionada será o output
// Caso o usuário não selecione cor, o output será a cor Default 
const corPadrao = corSelecionada || corDefault;
console.log(corPadrao); 