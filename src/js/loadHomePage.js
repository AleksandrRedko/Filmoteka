import {refs} from "../js/refs";
import pagination  from "../js/pagination";
import cardMovies from "../templates/cardMovies.hbs";

let currentPage =1;
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
  pagination(data.page,10)
  const liEl = Array.from(document.querySelectorAll(".pagination__item"));
 
  liEl.forEach((li)=>{
      
      li.addEventListener('click',()=> {
          currentPage = li.textContent
          qwe(currentPage)
          
      })
  })
  // console.log(pagination(data.page,10))
  // console.log(data);
  const markup = cardMovies(data.results);

  refs.cardList.innerHTML = markup;
}
