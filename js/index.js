const openModal = document.getElementById('open');
const closeModal = document.getElementById('close');
const modal = document.getElementById('modal');
const menu = document.querySelector('.modal__nav-menu');
const overlay = document.querySelector('.overlay');

const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModal.addEventListener('click', open);

closeModal.addEventListener('click', close);

overlay.addEventListener('click', close);

menu.addEventListener('click', close);
