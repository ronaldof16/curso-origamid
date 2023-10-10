// Verifique a distância da primeira imagem
// em relação ao topo da página
let primeira = document.querySelector("img");
console.log(primeira.offsetTop);

// Retorne a soma da largura de todas as imagens
let todasImagens = document.querySelectorAll("img");
let soma = 0;
todasImagens.forEach(item => {
    return soma += item.width;
})

console.log(soma);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
let links = document.querySelectorAll("a");
links.forEach(link => {
    let linkWidth = link.offsetWidth;
    let linkHeight = link.offsetHeight;
    if(linkHeight > 48 && linkWidth > 48) {
        console.log(link, "Possui acessibilidade")
    } else {
        console.log(link, "Não Possui acessibilidade")
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
let menu = document.querySelector(".menu")
if(window.innerWidth < 720) {
    menu.classList.add(".menu-mobile");
}
