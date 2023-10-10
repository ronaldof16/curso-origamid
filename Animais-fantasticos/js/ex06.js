// Duplique o menu e adicione ele em copy
let menu = document.querySelector(".menu")
let cloneMenu = menu.cloneNode(true)

let copy = document.querySelector(".copy")
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
let faq = document.querySelector("#faq")
let primeiroDt = faq.querySelector("dt")
//console.log(primeiroDt)


// Selecione o DD referente ao primeiro DT
let ddProximo = primeiroDt.nextElementSibling
//console.log(ddProximo.innerHTML)


// Substitua o conteúdo html de .faq pelo de .animais
let conteudoAnimais = document.querySelector(".animais").innerText
faq.innerText = conteudoAnimais;