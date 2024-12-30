/*
Anotações:
- Funções podem ser declaras e chamadas em qualquer parte do código
- Funções são First-class object (objetos de primeira classe)
-
*/

// Existem 

// 1. Declaração de função (Function hoisting)
function funcaoHoisting() {
    console.log('1. Função hoisting');
}
funcaoHoisting();

// 2. Function expression (função anônima)
const functionExpression = function() {
    console.log('2. Function expression');
}
functionExpression()

// 3. Arrow function

const arrowFunction = () => {
    console.log('3. Arrow function')
}
arrowFunction()


// 4. Dentro de um objeto 

const object = {
    talk: function() {
        console.log("4. I'm talking right now (function inside object)")
    }
}
object.talk()