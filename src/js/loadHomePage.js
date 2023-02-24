import { refs } from '../js/refs';
import { activatePagination } from '../js/pagination';
import cardMovies from '../templates/cardMovies.hbs';
import MoviesApiServise from './moviesApiServise';
import handleButtonClick from './scroll';
import toggleModal from './modal';

const moviesApiServise = new MoviesApiServise();

const paginationItem = refs.paginationList;

const whichButtonWasClicked = function (e) {
  console.log('lox');
  if (e.target.classList.contains('pagination__btn--page')) {
    return (moviesApiServise.page = +e.target.textContent);
  } else if (e.target.classList.contains('pagination__btn--left')) {
    return moviesApiServise.dincrementPage();
  } else if (e.target.classList.contains('pagination__btn--right')) {
    return moviesApiServise.incrementPage();
  }
};
const functionSelection = function (e) {
  whichButtonWasClicked(e);
  if (moviesApiServise.query === '') {
    moviesApiServise
      .fetchPopularMovies()
      .then(renderHomePage)
      .catch(error => console.log(error.message));
    handleButtonClick();
  } else if (moviesApiServise.query !== '') {
    moviesApiServise
      .fetchMovies()
      .then(renderHomePage)
      .catch(error => console.log(error.message));
    handleButtonClick();
  }
};
paginationItem.addEventListener('click', functionSelection);

const renderHomePage = async function (data) {
  const page = data.page;
  const totalPages = data.total_pages;

  const markup = cardMovies(data.results);
  refs.cardList.innerHTML = markup;

  activatePagination({ current: page, pages: totalPages });
};

const findMovies = function (e) {
  e.preventDefault();
  if (!e.target.searchQuery.value) {
    return;
  }
  if (e.target.searchQuery.value !== '') {
    moviesApiServise.resetPage();
    moviesApiServise.query = e.target.searchQuery.value;
    moviesApiServise
      .fetchMovies()
      .then(renderHomePage)
      .catch(error => console.log(error.message));
  }
};
// ================================================

refs.searchForm.addEventListener('submit', findMovies);

refs.cardList.addEventListener('click', toggleModal);
refs.watchedList.addEventListener('click', toggleModal);
refs.queueList.addEventListener('click', toggleModal);

moviesApiServise
  .fetchPopularMovies()
  .then(renderHomePage)
  .catch(error => console.log(error.message));
export default functionSelection;
