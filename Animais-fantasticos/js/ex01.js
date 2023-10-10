// Retorne no console todas as imagens do site
let imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
let imagens2 = document.querySelectorAll("img[src^='img/imagem']");
console.log(imagens2);

// Selecione todos os links internos (onde o href começa com #)
let links = document.querySelectorAll("[href^='#']");
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
let primeiroH2 = document.querySelector(".animais-descricao h2").innerHTML;
console.log(primeiroH2);

// Selecione o último p do site
let paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

let ultimoParagrafo = paragrafos[paragrafos.length - 1];
console.log(ultimoParagrafo);