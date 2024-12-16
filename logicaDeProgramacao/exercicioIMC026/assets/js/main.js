// Capturar evento de submit do form

const form = document.querySelector('#form')

form.addEventListener('submit', function (event) {
 event.preventDefault();
 
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const msgInvalid = 'Valor de Peso ou(e) Altura são inválidos!';

    if (!peso || !altura) {
        setResultado(msgInvalid, false);
        return;
        // Oque for digitado abaixo de return não será executado, pois a função encerra aqui (caso a estrutura If seja verdadeira)
    }

    const imcValue = getImc(peso, altura);
    const imcCat = getCategoriaImc(imcValue);

    const mensagem = `Seu IMC é ${imcValue}, você está (${imcCat})`;

    setResultado(mensagem, true);

});

function getCategoriaImc(imcValue) {
    const nivel = ['Abaixo do peso', 'com peso normal', 'com sobrepeso', "com obesidade grau 1", "com obesidade grau 2", " com obesidade grau 3"];
    if (imcValue > 39.9) return nivel[5];
    if (imcValue >= 34.9) return nivel[4];
    if (imcValue >= 29.9) return nivel[3];
    if (imcValue >= 24.9) return nivel[2];
    if (imcValue >= 18.5) return nivel[1];
    if (imcValue < 18.5) return nivel[0];
};

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};

function createParagraph() {
    // Cria um parágrafo
    const p = document.createElement('p');
    return p;
};

function setResultado (mensagem, isValid) {
    const resultado = document.querySelector("#resultado");
    // Zerá o resultado
    resultado.innerHTML = "";
    // Atribui o elemento criado a uma váriavel
    const p = createParagraph();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    // Atribui a mensagem a variável
    p.innerHTML = mensagem;
    // Insere o elemento criado, na div com ID 'resultado'
    resultado.appendChild(p);
}