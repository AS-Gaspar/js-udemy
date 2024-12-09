// Exemplo de utilização de If e Else, usando horários do dia
/* 
Se o horário estiver entre 0 e 11h - Bom dia
Entre 12 e 17h - Boa Tarde
E entre 18 e 23h - Boa noite
Caso sejam um horário inválido - Horário inválido
*/

const hora = 43;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia!") 
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde!")
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite!") 
} else {
    console.log("Horário inválido, tenha um péssimo dia!!!")
};