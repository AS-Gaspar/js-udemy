const data = new Date();
const diaSemana = data.getDay();


const mesNum = data.getMonth();
let mes = "";

switch (mesNum) {
    case 0:
        mes = "Janeiro";
        break;
    case 1:
        mes = "Fevereiro";
        break;
    case 2:
        mes = "Março";
        break;
    case 3:
        mes = "Abril";
        break;
    case 4:
        mes = "Maio";
        break;
    case 5:
        mes = "Junho";
        break;
    case 6:
        mes = "Julho";   
        break;
    case 7:
        mes = "Agosto";
        break;
    case 8:
        mes = "Setembro";
        break;
    case 9:
        mes = "Outubro";
        break;
    case 10:
        mes = "Novembro";
        break;
    case 11:
        mes = "Dezembro";
        break;
    default:
        console.log("Valor inválido");
        
}

let today = "";

switch (diaSemana) {
    case 0:
        today = "Domingo";
        break;
    case 1:
        today = "Segunda-feira";
        break;
    case 2:
        today = "Terça-feira";
        break;
    case 3:
        today = "Quarta-feira";
        break;
    case 4:
        today = "Quinta-feira";
        break;
    case 5:
        today = "Sexta-feira";
        break;
    case 6:
        today = "Sábado"; 
        break;
    default:
        console.log("Valor inválido");
        
}


main.innerHTML = `${today}, ${data.getDate()} de ${mes} de ${data.getFullYear()} </br> ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
