/* 
Operadores lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> Não
*/

// Retorna True
const expressaoAndTrue = true && true && true && true;
console.log(expressaoAndTrue);

// Retorna False
const expressaoAndFalse = true && false && true && true;
console.log(expressaoAndFalse);

// Retorna True
const expressaoOrTrue = true || false || true || false;
console.log(expressaoOrTrue);

// Retorna False
const expresaoOrFalse = false || false || false;
console.log(expresaoOrFalse);

// Exemplo prático do operador &&
const usuario = "Alexandre";
const senha = 1234;

const loginValido = usuario === "Alexandre" && senha === 1234;
console.log(`Login = ${loginValido}`);

/* 
Operador ! (NOT)
Ele basicamente inverte o valor
*/

// Output = False
console.log(!true);
