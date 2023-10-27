export default function initScrollSuave() {
    let linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

    function scrollToSection(event) {
        event.preventDefault();
        let href = event.currentTarget.getAttribute("href");
        let section = document.querySelector(href)
        
        let topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: "smooth"
        })

        /* forma alternativa
        section.scrollInToView({
            behavior: "smooth",
            block: "start"
        })  */

    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection)
    })
}