// Adicione a classe ativo a todos os itens do menu
let itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
    item.classList.add("ativo")
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
    if(index != 0) {
    item.classList.remove("ativo")
    }
});

// Verifique se as imagens possuem o atributo alt
let img = document.querySelectorAll("img");
img.forEach((item, index) => {
    if(item.hasAttribute("alt")) {
        console.log("Tem o atributo alt")
    } else {
        console.log("Não tem o atributo alt")
    }
})

// Modifique o href do link externo no menu
itensMenu[3].setAttribute("href", "https://google.com");


