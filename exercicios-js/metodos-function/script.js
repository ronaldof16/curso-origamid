// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos)
const arrayParagrafos = Array.from(paragrafos);
console.log(arrayParagrafos)

const qtdCarcteres = arrayParagrafos.reduce((acumulador, item) => {
  item = item.innerText.length;
  return acumulador + item
}, 0)

console.log(`A soma tota de caracteres é ${qtdCarcteres}`)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHtml = conteudo : null;
  return elemento;
}

console.log(criarElemento("h1", "ativo", "Boa tarde"))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novaFuncao = criarElemento.bind(null, "h1", "titulo");
console.log(novaFuncao("Olá mundo"))

  
  