// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
let resposta = document.querySelector('.resposta');
let cep = document.querySelector('#cep');
let btn = document.querySelector('.btn');

btn.addEventListener("click", handleClick)

function handleClick(event) {
  event.preventDefault();
  const cep1 = cep.value;
  buscaCep(cep1);
}

function buscaCep(cep1) {
  //event.preventDefault();
  fetch(`https://viacep.com.br/ws/${cep1}/json/`)
  .then(r => r.text())
  .then(body => resposta.innerText= body)

}





// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima


