const menu = document.querySelector('.menu');
const navmenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle("ativo");
    navmenu.classList.toggle('ativo');
})

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const navMenu = document.querySelector('.navigation ul');

    menu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});