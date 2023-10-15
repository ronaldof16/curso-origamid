function initTabNav() {
    let tabMenu = document.querySelectorAll(".js-tabmenu li");
    let tabContent = document.querySelectorAll(".js-tabcontent section");
    tabContent[0].classList.add("ativo");

    if(tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach(content => {
                content.classList.remove("ativo");
            })
        
            tabContent[index].classList.add("ativo");
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            })
        })
    }
}

initTabNav()

function initAcordion() {
    let acordionList = document.querySelectorAll(".js-acordion dt")
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

initAcordion()

function initScrollSuave() {
    let linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

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

initScrollSuave()

function intiAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add("ativo");
                } else {
                    section.classList.remove("ativo"); 
                }
            })
        }
    }

    animaScroll()

    window.addEventListener("scroll", animaScroll)
}

intiAnimacaoScroll()
