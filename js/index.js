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

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

menu.addEventListener('click', closeModal);
