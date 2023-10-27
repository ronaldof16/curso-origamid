export default function initAcordion() {
    let acordionList = document.querySelectorAll("[data-anime='accordion'] dt")
    if(acordionList.length) {
        acordionList[0].classList.add("ativo")
    acordionList[0].nextElementSibling.classList.add("ativo")

    function activeAcordion() {
        this.classList.toggle("ativo")
        this.nextElementSibling.classList.toggle("ativo")
    }

    acordionList.forEach((item) => {
        item.addEventListener("click", activeAcordion)
    })
    }
}