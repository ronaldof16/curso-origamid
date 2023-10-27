export default function initTabNav() {
    let tabMenu = document.querySelectorAll("[data-tab='menu'] li");
    let tabContent = document.querySelectorAll("[data-tab='content'] section");
    tabContent[0].classList.add("ativo");

    if(tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach(content => {
                content.classList.remove("ativo");
            })
            const direcao = tabContent[index].dataset.anime
            tabContent[index].classList.add("ativo", direcao);
        }
        
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            })
        })
    }
}

