// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome,
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `O nome completo é ${this.nome} ${this.sobrenome}`
} 

const andre = new Pessoa("andré", "Luiz", 25)

console.log(andre.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLAllCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String


  
  
