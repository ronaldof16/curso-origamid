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


