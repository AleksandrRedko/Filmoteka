import { refs } from './refs';
import MoviesApiServise from './moviesApiServise';
import modalCard from '../templates/modalCard.hbs';

import { storage } from './storage';

const moviesApiServise = new MoviesApiServise();

const closeModalBtn = document.querySelector('[data-close-modal]');
const backdrob = document.querySelector('[data-backdrob]');

if (storage.load('watch') !== undefined) {
  storage.idsMovies = storage.load('watch');
}

const onBackdrobClick = function (event) {
  if (event.currentTarget === event.target) {
    window.removeEventListener('keydown', onEscKeyPress);
    backdrob.classList.toggle('is-hidden');
  }
};

const onEscKeyPress = function (event) {
  if (event.code === 'Escape') {
    window.removeEventListener('keydown', onEscKeyPress);
    backdrob.classList.toggle('is-hidden');
  }
};

const toggleModal = function (event) {
  if (event.target.tagName !== 'IMG') {
    return;
  }

  const id = event.target.getAttribute('id');

  const renderModalWindow = async function (data) {
    const markup = await modalCard(data);

    refs.modal.innerHTML = markup;

    const btnAddWatch = document.querySelector('[data-add-watch]');
    const btnAddQueue = document.querySelector('[data-add-queue]');
    // ==================================================

    //  ================================
    btnAddWatch.addEventListener('click', () => {
      storage.idsMovies.watched.unshift(id);
      storage.save('watch', storage.idsMovies);
    });

    btnAddQueue.addEventListener('click', () => {
      storage.idsMovies.queue.unshift(id);
      storage.save('watch', storage.idsMovies);
    });
  };

  moviesApiServise
    .fetchMovieById(id)
    .then(renderModalWindow)
    .catch(error => console.log(error.message));

  backdrob.classList.toggle('is-hidden');
  if (!backdrob.classList.contains('is-hidden')) {
    window.addEventListener('keydown', onEscKeyPress);
  }
};

const closeModal = function () {
  window.removeEventListener('keydown', onEscKeyPress);
  backdrob.classList.toggle('is-hidden');
  refs.modal.innerHTML = '';
};

closeModalBtn.addEventListener('click', closeModal);

backdrob.addEventListener('click', onBackdrobClick);

export default toggleModal;
