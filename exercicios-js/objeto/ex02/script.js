// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade,
    this.andar = function () {
      console.log(this.nome + ' andou');
    }
  }

  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  let nome1 = new Pessoa("Joao", "20 anos")
  let nome2 = new Pessoa("Maria", "25 anos")
  let nome3 = new Pessoa("Bruno", "15 anos")
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  function Dom(elemento) {
    this.elements = document.querySelectorAll(elemento)
    this.addClass = (classe) => {
        this.elements.forEach(item => {
            item.classList.add(classe)
        })
    }
    this.removeClass = (classe) => {
        this.elements.forEach(item => {
            item.classList.remove(classe)
        })
    }
    
  }

  let lista = new Dom("li")
  console.log(lista.elements)
  lista.addClass("teste")
  lista.removeClass("teste")

  
  
