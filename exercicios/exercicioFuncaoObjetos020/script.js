function meuEscopo() {
   const form = document.querySelector('.form');
   const resultado = document.querySelector('.resultado');
   const pessoas = [];
   
   /* PARA CAPTURAR UM EVENTO
   form.onsubmit = function (evento) {
    evento.preventDefault();
    alert(1);
    console.log('Foi enviado');
   }
    */
   
   /* OUTRA FORMA DE CAPTURAR UM EVENTO + CONTADOR
   let contador = 0;
   function recebeEventoForm(evento) {
    
    evento.preventDefault();
    console.log(`Formulário não foi enviado ${contador}`);
    contador++;
   };
   */

   /* 
   FUNÇÃO CRIADA PARA CADA VEZ QUE O FORMULÁRIO 
   FOR ENVIADO, CAPTURA OS VALORES 
   */
  
   function recebeEventoForm(evento) {
    // Não deixa o navegador executar ações por padrão
    evento.preventDefault();
    
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    
    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

   };

   form.addEventListener('submit', recebeEventoForm);
};

meuEscopo();