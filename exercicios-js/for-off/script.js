// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
let li = document.querySelectorAll("li")
for(let item of li) {
  item.classList.add("ativo")
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for(let prop in window) {
  console.log(prop + ": " + window[prop])
}
