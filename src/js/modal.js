import { refs } from './refs';
import MoviesApiServise from './moviesApiServise';
import modalCard from '../templates/modalCard.hbs';
import LocalStorageId from './storage';
import { showQueueu, showWatched } from './showLibrary';
import scrollController from './scrollController';

const moviesApiServise = new MoviesApiServise();
const localStorageId = new LocalStorageId();

const closeModalBtn = document.querySelector('[data-close-modal]');
const backdrob = document.querySelector('[data-backdrob]');

const closeModal = function () {
  scrollController.enabledScroll();
  window.removeEventListener('keydown', onEscKeyPress);
  backdrob.classList.toggle('is-hidden');
  refs.modal.innerHTML = '';

  if (refs.watcheBtn.classList.contains('active__btn')) {
    showWatched();
  } else if (refs.queueBtn.classList.contains('active__btn')) {
    showQueueu();
  }
};

const onBackdrobClick = function (event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
};

const onEscKeyPress = function (event) {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const checkingButtonStatus = function (btnAddWatch, btnAddQueue, id) {
  if (localStorageId.getIdWatch().indexOf(id) !== -1) {
    btnAddWatch.textContent = 'remove from watched';
    btnAddQueue.style.display = 'none';
  } else {
    btnAddWatch.textContent = 'add to watched';
    btnAddQueue.style.display = 'block';
  }
  // =============
  if (localStorageId.getIdQueue().indexOf(id) !== -1) {
    btnAddQueue.textContent = 'added to the queue';
    btnAddQueue.classList.add('active');
  } else {
    btnAddQueue.textContent = 'add to queue';
    btnAddQueue.classList.remove('active');
  }
};

const addRemoveMovieWatched = function (pushIdQueue, pushId, id, btnAddWatch, btnAddQueue) {
  if (pushIdQueue) {
    localStorageId.putIdQueue(id);
    btnAddQueue.classList.remove('active');
  }

  if (pushId) {
    btnAddWatch.textContent = 'remove from watched';
    btnAddQueue.style.display = 'none';
  }
  if (!pushId) {
    btnAddWatch.textContent = 'add to watched';
    btnAddQueue.style.display = 'block';
  }
};

const addRemoveMovieQueue = function (pushIdQueue, btnAddQueue) {
  if (pushIdQueue) {
    btnAddQueue.textContent = 'added to the queue';
    btnAddQueue.classList.add('active');
  }
  if (!pushIdQueue) {
    btnAddQueue.textContent = 'add to queue ';
    btnAddQueue.classList.remove('active');
  }
};

const openModal = function (event) {
  if (event.target.tagName !== 'IMG') {
    return;
  }
  scrollController.disabledScroll();
  let id = event.target.getAttribute('id');

  const renderModalWindow = async function (data) {
    const markup = await modalCard(data);

    refs.modal.innerHTML = markup;

    const btnAddWatch = document.querySelector('[data-add-watch]');
    const btnAddQueue = document.querySelector('[data-add-queue]');

    checkingButtonStatus(btnAddWatch, btnAddQueue, id);

    btnAddWatch.addEventListener('click', () => {
      const { pushId, idsWatch } = localStorageId.putIdWatch(id);
      const { pushIdQueue, idsQueue } = localStorageId.putIdQueue(id);

      addRemoveMovieWatched(pushIdQueue, pushId, id, btnAddWatch, btnAddQueue);
    });

    btnAddQueue.addEventListener('click', () => {
      const { pushIdQueue, idsQueue } = localStorageId.putIdQueue(id);
      addRemoveMovieQueue(pushIdQueue, btnAddQueue);
    });
  };

  moviesApiServise
    .fetchMovieById(id)
    .then(renderModalWindow)
    .catch((error) => console.log(error.message));

  backdrob.classList.toggle('is-hidden');
  if (!backdrob.classList.contains('is-hidden')) {
    window.addEventListener('keydown', onEscKeyPress);
  }
};

closeModalBtn.addEventListener('click', closeModal);

backdrob.addEventListener('click', onBackdrobClick);

export default openModal;
