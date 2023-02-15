import {refs} from "../js/refs";
import pagination  from "../js/pagination";
import cardMovies from "../templates/cardMovies.hbs";
import MoviesApiServise from './moviesApiServise';

const moviesApiServise = new MoviesApiServise();

const nextPage = function(){ 
   
  moviesApiServise.incrementPage();
  moviesApiServise.fetchMovies().then(renderHomePage)
.catch(error => console.log(error.message));
  
}
const prevPage = function(){  
 
  moviesApiServise.dincrementPage();  
  moviesApiServise.fetchMovies().then(renderHomePage)
.catch(error => console.log(error.message)); 
}


const renderHomePage = async function (data) {
  const page = data.page;
  const totalPages = data.total_pages;
  const markup = cardMovies(data.results);

  pagination(page,totalPages)
    const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next');
  const liEl =  Array.from(document.querySelectorAll(".pagination__item"));
  liEl.forEach((li)=>{
      li.addEventListener('click', ()=>{
          moviesApiServise.page = Number(li.textContent);
          moviesApiServise.fetchMovies().then(renderHomePage)
          .catch(error => console.log(error.message));
      })
  })
  

  btnNext.addEventListener('click', nextPage);
  btnPrev.addEventListener('click', prevPage);

  refs.cardList.innerHTML = markup;
}


moviesApiServise.fetchMovies().then(renderHomePage)
.catch(error => console.log(error.message));



