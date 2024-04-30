const menu = document.querySelector('.menu');
const navmenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle("ativo");
    NavMenu.classList.toggle('ativo');
})