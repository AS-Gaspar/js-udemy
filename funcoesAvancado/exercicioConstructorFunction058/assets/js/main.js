function Calculadora() {
    this.display = document.querySelector('.display');
  
    this.inicia = () => {
      this.capturaCliques()
      this.capturaEspaco()
      this.capturaEnter()
    }

    this.capturaEspaco = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 8) {
                e.preventDefault()
                this.clear()
            }
        })
    }
  
    this.capturaEnter = () => {
      document.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          e.preventDefault()
          this.realizaConta()
        }
      });
    };
  
    this.capturaCliques = () => {
      document.addEventListener('click', event => {
        const el = event.target;
        if (el.classList.contains('btn-num')) this.addNumDisplay(el);
        if (el.classList.contains('btn-clear')) this.clear();
        if (el.classList.contains('btn-delete')) this.delete();
        if (el.classList.contains('btn-equal')) this.realizaConta();
      });
    };
  
    this.realizaConta = () => {
      try {
        const conta = eval(this.display.value);
  
        if(!conta) {
          alert('Conta inválida');
          return;
        }
  
        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    };
  
    this.addNumDisplay = el => {
      this.display.value += el.innerText;
      this.display.focus();
    };
  
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);
  }
  
  const calculadora = new Calculadora();
  calculadora.inicia();