import {refs} from "../js/refs";
import pagination  from "../js/pagination";
import cardMovies from "../templates/cardMovies.hbs";

let currentPage = 1;
qwe()
async function qwe() {
  const url =
    `https://api.themoviedb.org/3/trending/all/day?api_key=14f90a9673a8e38c0e2c74de4fe9bbab&page=${currentPage}`;

  await fetch(url)
    .then(renderHomePage)
    .catch((error) => console.log(error.message));
};

async function renderHomePage(response) {
  const data = await response.json();

  function nextBtn() {
 
    currentPage = Number(currentPage) + 1;

   
    qwe(currentPage)
 }
  pagination(data.page,data.total_pages)
  const liEl = Array.from(document.querySelectorAll(".pagination__item"));
  const btnPrev = document.querySelector('.prev');
  const btnNext = document.querySelector('.next')

  
  btnNext.addEventListener('click', nextBtn)


  if(currentPage === 1){
    liEl[0].classList.add('item__active')
  }

  liEl.forEach((li)=>{

      if(currentPage === li.textContent){
        li.classList.toggle('item__active')
      }
      
      li.addEventListener('click',()=> {
          currentPage = li.textContent
          qwe(currentPage)
          
      })

  })


  const markup = cardMovies(data.results);


  refs.cardList.innerHTML = markup;
}

