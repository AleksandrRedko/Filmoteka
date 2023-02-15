const BASE_URL = 'https://api.themoviedb.org/'
export default class MoviesApiServise {
 
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.totalPage = 0;
  }

  async fetchMovies() {
    
    const url = `${BASE_URL}3/trending/all/day?api_key=14f90a9673a8e38c0e2c74de4fe9bbab&page=${this.page}`;
    
    const response = await fetch(url);
    const data = await response.json();
     this.totalPage = await data.total_pages ;
 
    return data;
  }
//   resetPage() {
//     this.page = 1;
//   }
  incrementPage() {
    if(this.page !== this.totalPage){        
        this.page += 1;
    }  
  
  }
  dincrementPage() {
    if(this.page !== 1){        
        this.page -= 1;
    }    
  }
  



}
