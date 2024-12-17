const data = new Date();
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(2019, 3, 20, 12, 30, 30, 30);
// Ordem: ano, mês (0 ao 11), dia, hora, minuto, segundo, centésimo.
/* 
Forma alternativa: 
 const data = new Date('2019-03-20 12:30:30:30');
*/

function zeroToLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(data) {
    const ano = zeroToLeft(data.getFullYear());
    const mes = zeroToLeft(data.getMonth() + 1);
    const dia = zeroToLeft(data.getDate());
    const hora = zeroToLeft(data.getHours());
    const minuto = zeroToLeft(data.getMinutes());
    const segundo = zeroToLeft(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}/${hora}:${minuto}:${segundo}`;
}
console.log(data.toString());

console.log("Ano", data.getFullYear());
console.log("Mês", data.getMonth());
console.log("Dia", data.getDate());
console.log("Hora", data.getHours());
console.log("Minuto", data.getMinutes());
console.log("Segundo", data.getSeconds());
console.log("Centésimo", data.getMilliseconds());
console.log("Dia semana", data.getDay());
// 0 é domingo, 6 é Sábado.

const dataBrasil = new Date();

console.log(Date.now());
console.log(formatDate(dataBrasil));
