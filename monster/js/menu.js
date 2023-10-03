const btnMenu = document.querySelector('img[alt="hamburger"]');
const nav = document.querySelector('header nav');

let estado = 'up';

btnMenu.addEventListener('click',
function (){
    nav.classList.toggle('desplegado');
    if (estado == 'up'){
        btnMenu.src ='imgs/close-w.png';
        estado = 'down';
    }
    else {
        btnMenu.src ='imgs/menu-w.png';
        estado = 'up';
    }
})