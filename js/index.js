const openModalBtn = document.getElementById('open');
const closeModalBtn = document.getElementById('close');
const modal = document.getElementById('modal');
const menu = document.querySelector('.modal__nav-menu');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

openModalBtn.addEventListener('click', open);

closeModalBtn.addEventListener('click', close);

overlay.addEventListener('click', close);

menu.addEventListener('click', close);
