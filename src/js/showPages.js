import { refs } from './refs';
import { storage } from './storage';
import { activatePagination } from '../js/pagination';
import MoviesApiServise from './moviesApiServise';
import cardMovies from '../templates/cardMovies.hbs';
import functionSelection from '../js/loadHomePage';

// import handleButtonClick from "./scroll";

const paginationItem = refs.paginationList;

const moviesApiServise = new MoviesApiServise();

const getIdFromLocalStorage = async function (arry, element, currentPage) {
  const filmsWatchedIds = arry.map(Number);

  const moviesList = [];

  if (filmsWatchedIds !== null) {
    for (const id of filmsWatchedIds) {
      moviesList.push(await moviesApiServise.fetchMovieById(id));
    }

    const notesOfPage = 21;

    const start = (currentPage - 1) * 21;
    const end = start + notesOfPage;
    const list = moviesList.slice(start, end);

    const markup = cardMovies(list);
    element.innerHTML = markup;
  }
};

const goHome = function () {
  refs.homeRefs.classList.add('current');
  refs.libraryRefs.classList.remove('current');

  refs.form.style.display = 'flex';
  refs.btn.style.display = 'none';
  refs.header.classList.remove('my__library');

  refs.sectionLibrary.style.display = 'none';
  refs.sectionHome.style.display = 'block';
};

const goLibrary = async function (e) {
  e.preventDefault();
  paginationItem.removeEventListener('click', functionSelection);

  let page = 1;
  const totalPages = Math.ceil(storage.idsMovies.watched.length / 20);

  getIdFromLocalStorage(storage.idsMovies.watched, refs.watchedList, page);
  activatePagination({ current: page, pages: totalPages });

  refs.homeRefs.classList.remove('current');
  refs.libraryRefs.classList.add('current');

  refs.form.style.display = 'none';
  refs.btn.style.display = 'block';

  refs.header.classList.add('my__library');

  refs.sectionHome.style.display = 'none';
  refs.sectionLibrary.style.display = 'block';
};
const showQueueu = async function () {
  let page = 1;
  const totalPages = Math.ceil(storage.idsMovies.queue.length / 20);

  refs.watcheBtn.classList.remove('active__btn');
  refs.queueBtn.classList.add('active__btn');

  getIdFromLocalStorage(storage.idsMovies.queue, refs.queueList, page);
  activatePagination({ current: page, pages: totalPages });

  refs.queueContainer.style.display = 'block';
  refs.watcheContainer.style.display = 'none';
};

const showWatched = async function () {
  let page = 1;
  const totalPages = Math.ceil(storage.idsMovies.watched.length / 20);

  getIdFromLocalStorage(storage.idsMovies.watched, refs.watchedList, page);
  activatePagination({ current: page, pages: totalPages });

  refs.queueContainer.style.display = 'none';
  refs.watcheContainer.style.display = 'block';
};

refs.queueBtn.addEventListener('click', showQueueu);
refs.watcheBtn.addEventListener('click', showWatched);

refs.homeRefs.addEventListener('click', goHome);
refs.libraryRefs.addEventListener('click', goLibrary);
