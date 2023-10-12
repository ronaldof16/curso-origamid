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