const burgerMenu = document.getElementById('burger');
const overlay = document.getElementById('menu');

const burgerSideMenu = document.getElementById('sideBurger');
const sideMenu = document.getElementById('sideMenu');

const menuBtn = document.getElementById('modeDropBtn');
const modeMenu = document.getElementById('modeMenu');

const profileModeBtn = document.getElementById('profileModeBtn');
const profileMode = document.getElementById('profileMode');

const profileBestOfBtn = document.getElementById('profileBestOfBtn');
const profileBestOf = document.getElementById('profileBestOf');

if (burgerMenu) {
  burgerMenu.addEventListener('click', function () {
    this.classList.toggle('close');
    overlay.classList.toggle('overlay');
  });
}

if (burgerSideMenu) {
  burgerSideMenu.addEventListener('click', function () {
    this.classList.toggle('close');
    sideMenu.classList.toggle('overlay');
  });
}

if (profileModeBtn) {
  profileModeBtn.addEventListener('click', function () {
    this.classList.toggle('close');
    profileMode.classList.toggle('overlay');
  });
}

if (profileBestOfBtn) {
  profileBestOfBtn.addEventListener('click', function () {
    this.classList.toggle('close');
    profileBestOf.classList.toggle('overlay');
  });
}

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    this.classList.toggle('close');
    modeMenu.classList.toggle('overlay');
  });
}
