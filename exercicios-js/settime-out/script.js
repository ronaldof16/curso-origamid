// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarCor() {
    document.body.classList.toggle("ativar")
}

//setInterval(mudarCor, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", comecar)
pausar.addEventListener("click", parar)
pausar.addEventListener("dblclick", resetar)

let i = 0;
let timer;

function comecar() {
    timer = setInterval(() => {
        tempo.innerText = i++;
    }, 200);
    iniciar.setAttribute("disabled", "")
}

function parar() {
    clearInterval(timer);
    iniciar.removeAttribute("disabled")
}

function resetar() {
    tempo.innerText = 0;
    i = 0;
}



