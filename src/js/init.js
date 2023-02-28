import { refs } from './refs';
import cardMovies from '../templates/cardMovies.hbs';
import MoviesApiServise from './moviesApiServise';
import { activatePagination } from '../js/pagination';
import openModal from './modal';
import { spinerOf, spinerOn } from './spiner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const moviesApiServise = new MoviesApiServise();

spinerOn();
// функция вывода сообщения
const showMessage = function (data) {
  data.total_results === 0
    ? Notify.failure('Nothing found for your request')
    : Notify.success(`Found ${data.total_results} movies`);
  return data;
};

// функция рендера карточек фильма на главную страницу
const renderPage = async function ({ dataNew, data }) {
  const markup = cardMovies(dataNew);
  refs.cardList.innerHTML = markup;

  spinerOn();
  return data;
};
// функция рендера пагинации  на  страницу
const pagination = async function (data) {
  const paginationList = document.querySelector('.pagination');

  const list = document.querySelector('.pagination__pages');
  const current = data.page;
  const pages = data.total_pages;
  spinerOf();
  return { current, pages, list, paginationList };
};

const findMovies = function (e) {
  e.preventDefault();
  if (!e.target.searchQuery.value) {
    return;
  }

  if (e.target.searchQuery.value !== '') {
    moviesApiServise.resetPage();
    // записываем поисковое слово
    moviesApiServise.query = e.target.searchQuery.value;
    //  вызываем fetch запрос по слову
    moviesApiServise
      .fetchMovies()
      .then(renderPage)
      .then(showMessage)
      .then(pagination)
      .then(activatePagination)

      .catch((error) => console.log(error.message));
  }
};
// проверяет какому fetch делать запрос
const functionSelection = function () {
  if (moviesApiServise.query === '') {
    moviesApiServise
      .fetchPopularMovies()
      .then(renderPage)
      .then(pagination)
      .then(activatePagination)
      .catch((error) => console.log(error.message));
  } else if (moviesApiServise.query !== '') {
    moviesApiServise
      .fetchMovies()
      .then(renderPage)
      .then(pagination)
      .then(activatePagination)
      .catch((error) => console.log(error.message));
  }
};

// функция запроса по клику на пагинацию
const clickToMakeaRequest = function (e) {
  if (!e.target.dataset.pg) {
    return;
  }

  if (e.target.dataset.pg === 'right') {
    moviesApiServise.incrementPage();
    functionSelection();

    return;
  }

  if (e.target.dataset.pg === 'left') {
    moviesApiServise.dincrementPage();
    functionSelection();

    return;
  }

  if (e.target.dataset.pg) {
    moviesApiServise.page = +e.target.dataset.pg;
    functionSelection();

    return;
  }
};
//  вызываем fetch запрос популярных фильмов
moviesApiServise
  .fetchPopularMovies()
  .then(renderPage)
  .then(showMessage)
  .then(pagination)
  .then(activatePagination)
  .catch((error) => console.log(error.message));
// вешаем слушатель событий на инпут(поиск по слову)
refs.searchForm.addEventListener('submit', findMovies);
// опять добавляем слушатель событий на пагинацию
refs.pagination.addEventListener('click', clickToMakeaRequest);
// вешаем слушатель событий на список карточек фильмов
refs.cardList.addEventListener('click', openModal);
refs.watchedList.addEventListener('click', openModal);
refs.queueList.addEventListener('click', openModal);
