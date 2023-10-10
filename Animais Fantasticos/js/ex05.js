// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
let linksInternos = document.querySelectorAll("a[href^='#']");
function adicionar(event) {
    event.preventDefault()
    linksInternos.forEach(item => {
        item.classList.remove("ativo")
    })
    event.currentTarget.classList.add("ativo")
}

linksInternos.forEach(item => {
    item.addEventListener("click", adicionar)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

let todosElementos = document.querySelectorAll("body *")
function clicar(event) {
    console.log(event.currentTarget)
}

todosElementos.forEach(item => {
    item.addEventListener("click", clicar)
}) 

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function clicar(event) {
   // event.currentTarget.remove() 
}

todosElementos.forEach(item => {
    item.addEventListener("click", clicar)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function aumentar(event) {
    console.log(event.key)
    if(event.key === "t") {
        document.documentElement.classList.toggle("texto-maior")
    }
}

window.addEventListener("keydown", aumentar)
