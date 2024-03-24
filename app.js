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

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  overlay.classList.toggle('overlay');
});

burgerSideMenu.addEventListener('click', function () {
  this.classList.toggle('close');
  sideMenu.classList.toggle('overlay');
});

menuBtn.addEventListener('click', function () {
  this.classList.toggle('close');
  modeMenu.classList.toggle('overlay');
});

profileModeBtn.addEventListener('click', function () {
  this.classList.toggle('close');
  profileMode.classList.toggle('overlay');
});

profileBestOfBtn.addEventListener('click', function () {
  this.classList.toggle('close');
  profileBestOf.classList.toggle('overlay');
});