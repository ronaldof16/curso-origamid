let imagem = document.querySelector(".circulo");

function andar(event) {
    imagem.style.top = event.y + "px";
    imagem.style.left = event.x + "px";
}




window.addEventListener("mousemove", andar);
