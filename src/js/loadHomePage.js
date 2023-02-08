import {refs} from "../js/refs";
import cardMovies from "../templates/cardMovies.hbs";

(async function () {
  const url =
    " https://api.themoviedb.org/3/trending/all/day?api_key=14f90a9673a8e38c0e2c74de4fe9bbab";

  await fetch(url)
    .then(renderHomePage)
    .catch((error) => console.log(error.message));
})();

async function renderHomePage(response) {
  const data = await response.json();
  console.log(data.results);
  const markup = cardMovies(data.results);

  refs.cardList.innerHTML = markup;
}
