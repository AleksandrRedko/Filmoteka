const BASE_URL = 'https://api.themoviedb.org/';
const key = 'api_key=14f90a9673a8e38c0e2c74de4fe9bbab';

export default class MoviesApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalPage = 0;
  }

  async fetchPopularMovies() {
    const url = `${BASE_URL}3/trending/all/day?${key}&page=${this.page}`;

    const response = await fetch(url);
    const data = await this.checkRequestSuccess(response);

    this.totalPage = await data.total_pages;

    return data;
  }

  async fetchMovies() {
    const url = `${BASE_URL}3/search/movie?${key}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=true`;
    const response = await fetch(url);
    const data = await this.checkRequestSuccess(response);
    this.totalPage = await data.total_pages;

    return data;
  }

  async fetchMovieById(id) {
    const url = `${BASE_URL}3/movie/${id}?${key}&language=en-US`;
    const response = await fetch(url);
    const data = await this.checkRequestSuccess(response);
    // console.log(data);
    return data;
  }

  checkRequestSuccess(response) {
    let message = 'Oops! Looks like something went wrong';
    // return Notify.failure('Sorry, there are no images matching your search query. Please try again.', options);
    if (response.status === 422) {
      message = 'Search result failed. Please enter the correct movie title and try again.';

      throw new Error(message);
    } else if (response.ok === false || response.status === 404) {
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
      console.log(this.page);
    }
  }
  dincrementPage() {
    if (this.page !== 1) {
      this.page -= 1;
      console.log(this.page);
    }
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
