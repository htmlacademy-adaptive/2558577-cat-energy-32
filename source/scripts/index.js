// eslint-disable-next-line check-file/folder-naming-convention
const buttonMenu = document.querySelector('.main-header__toggle');
const menu = document.querySelector('.main-nav__list');
const nav = document.querySelector('.main-nav');
nav.classList.remove('main-nav--no-js');


buttonMenu.classList.remove('main-header__toggle--open');
buttonMenu.classList.remove('main-header__toggle--no-js');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('main-header__toggle--close');
  menu.classList.toggle('site-list--open');
});
