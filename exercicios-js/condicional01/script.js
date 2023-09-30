let botao = document.querySelector(".btn");


function somar() {
    let divi = document.querySelector("div");
    let novoValor = Number(divi.innerText) + 1;
    
    if(novoValor < 10) {
        divi.innerText = novoValor;
    } else {
        console.log("O número chegou em 9, não é possível adicionar mais!")
    }
    
}

if(botao) {
    botao.addEventListener("click", somar);
}
