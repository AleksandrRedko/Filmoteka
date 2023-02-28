import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://api.themoviedb.org/3/';
const key = 'api_key=14f90a9673a8e38c0e2c74de4fe9bbab';

export default class MoviesApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalPage = 0;
  }

  async fetchPopularMovies() {
    const url = `${BASE_URL}trending/all/day?${key}&page=${this.page}`;

    const response = await fetch(url);
    const data = await this.checkRequestSuccess(response);
    this.totalPage = await data.total_pages;
    const arr = await this.fetchGenres();

    const dataNew = data.results.map((el) => ({
      ...el,
      genre_ids: el.genre_ids.flatMap((num) => arr.filter((el) => el.id === num)),
    }));

    return { dataNew, data };
  }

  async fetchMovies() {
    const url = `${BASE_URL}search/movie?${key}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=true`;
    const response = await fetch(url);
    const data = await this.checkRequestSuccess(response);
    this.totalPage = await data.total_pages;
    const arr = await this.fetchGenres();

    const dataNew = data.results.map((el) => ({
      ...el,
      genre_ids: el.genre_ids.flatMap((num) => arr.filter((el) => el.id === num)),
    }));

    return { dataNew, data };
  }

  async fetchMovieById(id) {
    const url = `${BASE_URL}movie/${id}?${key}&language=en-US`;
    const response = await fetch(url);
    const data = await this.checkRequestSuccess(response);

    return data;
  }

  async fetchGenres() {
    return fetch(`${BASE_URL}genre/movie/list?${key}`)
      .then((response) => response.json())
      .then((list) => {
        return list.genres;
      });
  }

  checkRequestSuccess(response) {
    let message = 'Oops! Looks like something went wrong';

    if (response.status === 422) {
      Notify.failure('Search result failed. Please enter the correct movie title and try again.');

      throw new Error(message);
    } else if (response.ok === false || response.status === 404) {
      Notify.failure(message);
      throw new Error(message);
    } else {
      return response.json();
    }
  }

  resetPage() {
    this.page = 1;
  }
  incrementPage() {
    if (this.page !== this.totalPage) {
      this.page += 1;
    }
  }
  dincrementPage() {
    if (this.page !== 1) {
      this.page -= 1;
    }
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
