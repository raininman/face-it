const burgerMenu = document.getElementById('burger');
const overlay = document.getElementById('menu');

const burgerSideMenu = document.getElementById('sideBurger');
const sideMenu = document.getElementById('sideMenu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
  if (overlay.children.length > 3) {
    overlay.classList.toggle('scroll');
  }
});

burgerSideMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  sideMenu.classList.toggle('overlay');
});