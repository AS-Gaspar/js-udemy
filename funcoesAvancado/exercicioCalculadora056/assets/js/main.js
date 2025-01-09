const criaCalculadora = () => {
    return {
        display: document.querySelector('.display'), 

        inicia() {
           this.cliqueBotoes() 
           this.pressionaEnter()
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.makeCalc()
                }
            })
        },

        clearDisplay() { 
            this.display.value = ''
        },

        clearLast() {
            this.display.value = this.display.value.slice(0, -1)
        },  

        makeCalc() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida')
                    return
                }

                if(!conta && conta !== 0) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = conta
            } catch(e) {
                alert('Conta inválida')
                return
            }
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-delete')) {
                    this.clearLast()
                }

                if(el.classList.contains('btn-equal')) {
                    this.makeCalc()
                }
            // .bind(this) -> faz com que o this seja o objeto calculadora (Só funciona com funções normais)
            })//.bind(this)
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia() // Calculadora iniciada