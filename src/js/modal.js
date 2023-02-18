import {refs} from './refs';
import MoviesApiServise from './moviesApiServise';
import modalCard from '../templates/modalCard.hbs';
import {storage} from './storage';

const moviesApiServise = new MoviesApiServise();

const closeModalBtn = document.querySelector('[data-close-modal]');

const backdrob = document.querySelector('[data-backdrob]');







storage.idsMovies = storage.load('watch')

const logBackdrobClick = function(){
    // backdrob.classList.add('is-hidden')
   
};




const toggleModal =  function(event){
    if (event.target.tagName !== 'IMG') {
      return
    }
    
    
 const id = event.target.getAttribute('id');
    
    moviesApiServise.fetchMovieById(id).then(renderModalWindow)
    .catch(error => console.log(error.message));
    async function renderModalWindow (data){
     
      const markup = await modalCard(data);
      
      refs.modal.innerHTML = markup;
      // local storage
      const btnAddWatch = document.querySelector('[data-add-watch]');
      const btnAddQueue = document.querySelector('[data-add-queue]');

 btnAddWatch.addEventListener('click',()=>{
  storage.idsMovies.watched.push(id);
  storage.save('watch',storage.idsMovies)
  
 })
 btnAddQueue.addEventListener('click',()=>{
  storage.idsMovies.queue.push(id);
  storage.save('watch',storage.idsMovies)
 })


    
   
     
    }
    
    backdrob.classList.toggle('is-hidden')
  };
  
const closeModal = function () {
  backdrob.classList.toggle('is-hidden')
  refs.modal.innerHTML = '';
}

closeModalBtn.addEventListener('click', closeModal);

backdrob.addEventListener('click', logBackdrobClick);

export default toggleModal;