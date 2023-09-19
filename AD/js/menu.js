const btnMenu = document.querySelector('img[alt="menu"]');
const nav   = document.querySelector('header nav');

let estado = 'up';
btnMenu.addEventListener(
        'click',
        function()
        {
            nav.classList.toggle('desplegado');
            if( estado == 'up' ){
                btnMenu.src = 'imgs/close.png';
                estado = 'down';
            }
            else {
                btnMenu.src = 'imgs/hamburger.png';
                estado = 'up';
            }

        }
);