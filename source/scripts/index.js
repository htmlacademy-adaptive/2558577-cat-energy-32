// eslint-disable-next-line check-file/folder-naming-convention
const buttonMenu = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav__list');

buttonMenu.classList.remove('main-nav__toggle--close');
menu.classList.remove('main-nav__list--open');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('main-nav__toggle--close');
  menu.classList.toggle('main-nav__list--open');
});
