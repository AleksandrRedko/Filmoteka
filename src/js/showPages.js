import {refs} from "./refs";
import {storage} from './storage';
import MoviesApiServise from './moviesApiServise';
import cardMovies from "../templates/cardMovies.hbs";

const moviesApiServise = new MoviesApiServise();

// const idsWatch = storage.idsMovies.watched;
// const idsQueue = storage.idsMovies.queue;

refs.homeRefs.classList.add("current");

const goHome = function (e) {
  e.preventDefault();
  refs.homeRefs.classList.add("current");
  refs.libraryRefs.classList.remove("current");

  refs.form.style.display = "flex";
  refs.btn.style.display = "none";
  refs.header.classList.remove("my__library");

  refs.sectionLibrary.style.display = "none";
  refs.sectionHome.style.display = "block";
};
// начинай отсюда!!!!!!!!!!
const goLibrary = function (e) {
  e.preventDefault();
  console.log(storage.idsMovies);
  storage.idsMovies.watched.map((i)=>{
    moviesApiServise.fetchMovieById(i).then(data =>{console.log(data)})
    .catch(error => console.log(error.message));
  }
    )


  refs.homeRefs.classList.remove("current");
  refs.libraryRefs.classList.add("current");

  refs.form.style.display = "none";
  refs.btn.style.display = "block";

  refs.header.classList.add("my__library");

  refs.sectionHome.style.display = "none";
  refs.sectionLibrary.style.display = "block";
};

const showQueueu = function () {
  refs.watcheBtn.classList.remove('active__btn');
  refs.queueBtn.classList.add('active__btn');
  //  console.log(storage.idsMovies);


  refs.queueContainer.style.display = "block";
  refs.watcheContainer.style.display = "none";

 
};
const showWatched = function () {
  refs.queueBtn.classList.remove('active__btn');
  refs.watcheBtn.classList.add('active__btn');
  // console.log(storage.idsMovies);
  

  refs.queueContainer.style.display = "none";
  refs.watcheContainer.style.display = "block";


};
 
refs.queueBtn.addEventListener("click", showQueueu);
refs.watcheBtn.addEventListener("click", showWatched);

refs.homeRefs.addEventListener("click", goHome);
refs.logoRefs.addEventListener("click", goHome);
refs.libraryRefs.addEventListener("click", goLibrary);
