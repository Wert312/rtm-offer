const menu = document.querySelector('#main-menu');
const menuBtn = document.querySelector('#menu-button');
const menuCloseBtn = document.querySelector('#menu-close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('main__menu--active')
    document.body.classList.add('menu-active')
});
menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('main__menu--active')
    document.body.classList.remove('menu-active')
});