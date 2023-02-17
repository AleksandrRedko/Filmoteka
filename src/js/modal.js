const closeModalBtn = document.querySelector('[data-close-modal]');
const openModalBtn = document.querySelector('[data-open-modal]');
const backdrob = document.querySelector('[data-backdrob]');

const logBackdrobClick = function(){
    // backdrob.classList.add('is-hidden')
    console.log('это клик в бекдроб');
};

const toggleModal = function(){
    backdrob.classList.toggle('is-hidden')
};

openModalBtn.addEventListener('click',toggleModal );
closeModalBtn.addEventListener('click', toggleModal);

backdrob.addEventListener('click', logBackdrobClick);