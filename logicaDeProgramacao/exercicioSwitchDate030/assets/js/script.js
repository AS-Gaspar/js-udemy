// // Variáveis para converter o número das datas em texto
// const data = new Date();
// const diaSemana = data.getDay();
// const mesNum = data.getMonth();
// let mes = "";
// let today = "";

// // Meses do ano
// switch (mesNum) {
//     case 0:
//         mes = "Janeiro";
//         break;
//     case 1:
//         mes = "Fevereiro";
//         break;
//     case 2:
//         mes = "Março";
//         break;
//     case 3:
//         mes = "Abril";
//         break;
//     case 4:
//         mes = "Maio";
//         break;
//     case 5:
//         mes = "Junho";
//         break;
//     case 6:
//         mes = "Julho";   
//         break;
//     case 7:
//         mes = "Agosto";
//         break;
//     case 8:
//         mes = "Setembro";
//         break;
//     case 9:
//         mes = "Outubro";
//         break;
//     case 10:
//         mes = "Novembro";
//         break;
//     case 11:
//         mes = "Dezembro";
//         break;
//     default:
//         console.log("Valor inválido");
        
// }

// // Dias da semana
// switch (diaSemana) {
//     case 0:
//         today = "Domingo";
//         break;
//     case 1:
//         today = "Segunda-feira";
//         break;
//     case 2:
//         today = "Terça-feira";
//         break;
//     case 3:
//         today = "Quarta-feira";
//         break;
//     case 4:
//         today = "Quinta-feira";
//         break;
//     case 5:
//         today = "Sexta-feira";
//         break;
//     case 6:
//         today = "Sábado"; 
//         break;
//     default:
//         console.log("Valor inválido");
        
// }

// function zeroToLeft(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// // Estrutura condicional para exibir imagem de acordo com o horário
// if (data.getHours() >= 6 && data.getHours() <= 12) {
//     imagem.innerHTML = `<img src="./assets/imgs/manha.png" alt="manhã">`;
// } else if (data.getHours() > 12 && data.getHours() <= 18) {
//     imagem.innerHTML = `<img src="./assets/imgs/tarde.png" alt="tarde">`;
// } else {
//     imagem.innerHTML = `<img src="./assets/imgs/noite.png" alt="noite">`;
// }

// // Exibição da data e hora
// DateHour.innerHTML = `${today}, ${data.getDate()} de ${mes} de ${data.getFullYear()} </br> Horário de Brasília: ${zeroToLeft(data.getHours())}:${zeroToLeft(data.getMinutes())}:${zeroToLeft(data.getSeconds())}`;

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' }); 


// Estrutura condicional para exibir imagem de acordo com o horário
if (data.getHours() >= 6 && data.getHours() <= 12) {
    imagem.innerHTML = `<img src="./assets/imgs/manha.png" alt="manhã">`;
} else if (data.getHours() > 12 && data.getHours() <= 18) {
    imagem.innerHTML = `<img src="./assets/imgs/tarde.png" alt="tarde">`;
} else {
    imagem.innerHTML = `<img src="./assets/imgs/noite.png" alt="noite">`;
}
