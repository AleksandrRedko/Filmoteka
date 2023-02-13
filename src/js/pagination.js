const ulList = document.querySelector('.pagination__list')


const pagination = function(currentPage,totalPages) {
    
    let markup ='';
   for (let index = 1; index <= totalPages; index++) {
    markup += `<li class="pagination__item">${index}</li>`

   }

    ulList.innerHTML = markup;  
    
}
export default pagination;
//  let markup ='';

//  if(currentPage > 1){
//     markup += '<li class="pagination__item"><button>PREV</button></li>'
//  }
//  markup += '<li class="pagination__item">1</li>'
//  if(currentPage > 3){
//     markup += '<li class="pagination__item">...</li>'
//  }else{
//     markup += '<li class="pagination__item">2</li>'
//  }
//  markup += '<li class="pagination__item">3</li>'

    // const markup = `<li class="pagination__item">${currentPage -1}</li>
    // <li class="pagination__item">${currentPage}</li>
    // <li class="pagination__item">${currentPage +1}</li>
    // <li class="pagination__item">${totalPages}</li>`;