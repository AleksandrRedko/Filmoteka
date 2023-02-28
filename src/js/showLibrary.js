import { refs } from './refs';
import LocalStorageId from './storage';
import { activatePagination } from './pagination';
import MoviesApiServise from './moviesApiServise';
import cardMovies from '../templates/cardMovies.hbs';
import { spinerOf, spinerOn } from './spiner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const moviesApiServise = new MoviesApiServise();
const localStorageId = new LocalStorageId();
// функция вывода сообщения если нету добавленных фильмов
const showMessageIfNoMoviesSaved = function (arry, containerName) {
  if (arry.length === 0) {
    Notify.failure(`you don't have saved movies in ${containerName}`);
  }
};

// функция рендера карточек на странице: библиотека
const getIdFromLocalStorage = async function (arry, element, currentPage) {
  if (arry.length === 0) {
    element.innerHTML = '';
  }
  const moviesList = [];

  if (arry.length !== 0) {
    for (const id of arry) {
      moviesList.push(await moviesApiServise.fetchMovieById(id));
    }

    const notesOfPage = 21;

    const start = (currentPage - 1) * notesOfPage;
    const end = start + notesOfPage;
    const list = moviesList.slice(start, end);

    const markup = cardMovies(list);
    element.innerHTML = markup;

    
  }
};
// функция запроса по клику на пагинацию
const clickToMakeaRequest = (arryId, renderList, page, totalPages) => (e) => {
  if (!e.target.dataset.pg) {
    return;
  }

  if (e.target.dataset.pg === 'right') {
    if (page < totalPages) {
      page += 1;
      getIdFromLocalStorage(arryId, renderList, page);
    }
    return;
  }

  if (e.target.dataset.pg === 'left') {
    if (page !== 1) {
      page -= 1;
      getIdFromLocalStorage(arryId, renderList, page);
    }
    return;
  }

  if (e.target.dataset.pg) {
    page = +e.target.dataset.pg;
    getIdFromLocalStorage(arryId, renderList, page);

    return;
  }
};

const showHomePage = function () {
  refs.cardList.innerHTML = '';
  refs.pagination.innerHTML = '';
 
  refs.homeRefs.classList.add('current');
  refs.libraryRefs.classList.remove('current');

  refs.form.style.display = 'flex';
  refs.btn.style.display = 'none';
  refs.header.classList.remove('my__library');

  refs.sectionLibrary.style.display = 'none';
  refs.sectionHome.style.display = 'block';
};

const goLibrary = function (e) {
  e.preventDefault();
  
  const containerName = 'Watched';
  let page = 1;
  const arryIdWatch = localStorageId.getIdWatch();
  showMessageIfNoMoviesSaved(arryIdWatch, containerName);

  const renderList = refs.watchedList;
  const totalPages = Math.ceil(arryIdWatch.length / 20);
  const list = document.querySelector('.pagination__pages-watch');
  const paginationList = document.querySelector('.pagination-watch');

  getIdFromLocalStorage(arryIdWatch, refs.watchedList, page);
  activatePagination({ current: page, pages: totalPages, list, paginationList });

  paginationList.addEventListener(
    'click',
    clickToMakeaRequest(arryIdWatch, renderList, page, totalPages)
  );

  refs.homeRefs.classList.remove('current');
  refs.libraryRefs.classList.add('current');

  refs.form.style.display = 'none';
  refs.btn.style.display = 'block';

  refs.header.classList.add('my__library');

  refs.sectionHome.style.display = 'none';
  refs.sectionLibrary.style.display = 'block';
};
export const showQueueu = function () {
 
  refs.queueContainer.style.display = 'block';
  refs.watcheContainer.style.display = 'none';

  refs.watcheBtn.classList.remove('active__btn');
  refs.queueBtn.classList.add('active__btn');

  const containerName = 'Queue';
  const arryIdQueue = localStorageId.getIdQueue();
  showMessageIfNoMoviesSaved(arryIdQueue, containerName);

  let page = 1;
  const renderList = refs.queueList;
  const totalPages = Math.ceil(arryIdQueue.length / 20);
  const list = document.querySelector('.pagination__pages-queue');
  const paginationList = document.querySelector('.pagination-queue');

  getIdFromLocalStorage(arryIdQueue, refs.queueList, page);
  activatePagination({ current: page, pages: totalPages, list, paginationList });

  paginationList.addEventListener(
    'click',
    clickToMakeaRequest(arryIdQueue, renderList, page, totalPages)
  );
};

export const showWatched = function () {
 
  const arryIdWatch = localStorageId.getIdWatch();
  const containerName = 'Watched';
  showMessageIfNoMoviesSaved(arryIdWatch, containerName);

  let page = 1;
  const renderList = refs.watchedList;
  const totalPages = Math.ceil(arryIdWatch.length / 20);
  const list = document.querySelector('.pagination__pages-watch');
  const paginationList = document.querySelector('.pagination-watch');

  getIdFromLocalStorage(arryIdWatch, refs.watchedList, page);
  activatePagination({ current: page, pages: totalPages, list, paginationList });

  paginationList.addEventListener(
    'click',
    clickToMakeaRequest(arryIdWatch, renderList, page, totalPages)
  );

  refs.queueBtn.classList.remove('active__btn');
  refs.watcheBtn.classList.add('active__btn');

  refs.queueContainer.style.display = 'none';
  refs.watcheContainer.style.display = 'block';
};

refs.queueBtn.addEventListener('click', showQueueu);
refs.watcheBtn.addEventListener('click', showWatched);

refs.homeRefs.addEventListener('click', showHomePage);
refs.libraryRefs.addEventListener('click', goLibrary);
