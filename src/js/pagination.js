const ulList = document.querySelector('.pagination__list')

const pagination = function(currentPage,totalPages) {
    
    let markup ='';


    markup += `<li class="pagination__btn prev"></li>`

    if(currentPage <= 5){
        markup += `<li class="pagination__item ">1</li>
        <li class="pagination__item">2</li>
        <li class="pagination__item">3</li>
        <li class="pagination__item">4</li>
        <li class="pagination__item">5</li>
        <li class="pagination__item">6</li>
        <li class="pagination__item">7</li>        
        <li class="pagination__dots">...</li>
        <li class="pagination__item">${totalPages}</li>`
    }
    if(currentPage >= 6 && currentPage <= totalPages -4){
        markup += `<li class="pagination__item ">1</li>
        <li class="pagination__dots">...</li>
        <li class="pagination__item">${currentPage -2}</li>
        <li class="pagination__item">${currentPage -1}</li>
        <li class="pagination__item">${currentPage}</li>
        <li class="pagination__item">${currentPage +1}</li>
        <li class="pagination__item">${currentPage +2}</li>        
        <li class="pagination__dots">...</li>
        <li class="pagination__item">${totalPages}</li>`
    }
    if(currentPage >= totalPages -3){
        markup += `<li class="pagination__item ">1</li>
        <li class="pagination__dots">...</li>
        <li class="pagination__item">${totalPages-6}</li>
        <li class="pagination__item">${totalPages-5}</li>
        <li class="pagination__item">${totalPages-4}</li>
        <li class="pagination__item">${totalPages-3}</li>
        <li class="pagination__item">${totalPages-2}</li>
        <li class="pagination__item">${totalPages-1}</li>        
        <li class="pagination__item">${totalPages}</li>`
    }
    markup += `<li class="pagination__btn next"></li>`


    
    ulList.innerHTML = markup;  
    const liEl =  Array.from(document.querySelectorAll(".pagination__item"));
    liEl.forEach((li)=>{
        
        if(li.textContent == currentPage){
            li.classList.add('item__active')
        }

    })

    
}
export default pagination;
