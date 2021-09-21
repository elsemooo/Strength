const menu = document.querySelector("#menuToggle");
const menuResponsive = document.querySelector(".navMobile")
function toggleMenu(){
    menuResponsive.classList.toggle("active");
}
menu.addEventListener("click",toggleMenu);
