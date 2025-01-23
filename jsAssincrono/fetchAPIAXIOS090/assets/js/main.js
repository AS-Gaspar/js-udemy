axios('pessoas.json')
    .then(resposta => loadElementsOnPage(resposta.data))

   function loadElementsOnPage(json) {
      const table = document.createElement('table') 

      for (let [i, pessoa] of json.entries()) {
        const tr = document.createElement('tr')
        tr.classList.add('container-pessoas')

        const tdPessoa = document.createElement('td')
        tdPessoa.innerHTML = `PESSOA ${i+1}`
        tr.appendChild(tdPessoa)
        
        const tdNome = document.createElement('td')
        tdNome.innerHTML = `Nome: ${pessoa.nome}`
        tr.appendChild(tdNome)

        const tdIdade = document.createElement('td')
        tdIdade.innerHTML = `Idade: ${pessoa.idade}`
        tr.appendChild(tdIdade)

        const tdSalario = document.createElement('td')
        tdSalario.innerHTML = `Salario: R$${pessoa.salario}`
        tr.appendChild(tdSalario)

        table.appendChild(tr)
    }
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
   }

