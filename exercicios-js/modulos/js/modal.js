export default function initModal() {
    const btnAbrir = document.querySelector('[data-modal="abrir"]')
    const btnFechar = document.querySelector('[data-modal="fechar"]')
    const container = document.querySelector('[data-modal="container"]')

    if(btnAbrir && btnFechar && container) {
        function toggleModal(event) {
            event.preventDefault()
            container.classList.toggle("ativo")
        }
        
        function clicarFora(event) {
            if(event.target === this) {
            toggleModal(event)
            }
        }

        btnAbrir.addEventListener("click", toggleModal)
        btnFechar.addEventListener("click", toggleModal)
        container.addEventListener("click", clicarFora)
    }
}



