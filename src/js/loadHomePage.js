import {refs} from "../js/refs";
import pagination  from "../js/pagination";
import cardMovies from "../templates/cardMovies.hbs";
import MoviesApiServise from './moviesApiServise';
import handleButtonClick from './scroll';



 


const moviesApiServise = new MoviesApiServise();

const nextPage = function(){ 
  handleButtonClick();
  moviesApiServise.incrementPage();
  if(moviesApiServise.query === ''){
    moviesApiServise.fetchPopularMovies().then(renderHomePage)
    .catch(error => console.log(error.message));
    
    return;
  }

  moviesApiServise.fetchMovies().then(renderHomePage)
  .catch(error => console.log(error.message));
  
  return;
 
}
const prevPage = function(){  
  handleButtonClick();
  moviesApiServise.dincrementPage();
  if(moviesApiServise.query === ''){
    moviesApiServise.fetchPopularMovies().then(renderHomePage)
    .catch(error => console.log(error.message));
  
    return;
  }

  moviesApiServise.fetchMovies().then(renderHomePage)
  .catch(error => console.log(error.message));
  
  return;

}


const renderHomePage = async function (data) {
  const page = data.page;
  const totalPages = data.total_pages;
  const totalResults = data.total_results;
  const markup = cardMovies(data.results);

  pagination(page,totalPages,totalResults)
    const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next');
  const liEl =  Array.from(document.querySelectorAll(".pagination__item"));
  liEl.forEach((li)=>{
      li.addEventListener('click', ()=>{
          moviesApiServise.page = Number(li.textContent);
          handleButtonClick()
         
          if(moviesApiServise.query === ''){
            moviesApiServise.fetchPopularMovies().then(renderHomePage)
            .catch(error => console.log(error.message));
          
            return;
          }
        
          moviesApiServise.fetchMovies().then(renderHomePage)
          .catch(error => console.log(error.message));
          
          return;
         
        
       
      })
  })
  

  if(totalResults > 1){
    btnNext.addEventListener('click', nextPage);
  btnPrev.addEventListener('click', prevPage);
  }

  refs.cardList.innerHTML = markup;
}

const findMovies = function(e){
e.preventDefault();
if(!e.target.searchQuery.value){
  return;
}
if(e.target.searchQuery.value !== ''){
  moviesApiServise.resetPage()
moviesApiServise.query = e.target.searchQuery.value
moviesApiServise.fetchMovies().then(renderHomePage)
.catch(error => console.log(error.message));
}


// const page = data.page;
// const totalPages = data.total_pages;
// pagination(page,totalPages)
};
// ================================================
refs.searchForm.addEventListener('submit',findMovies)

moviesApiServise.fetchPopularMovies().then(renderHomePage)
.catch(error => console.log(error.message));



