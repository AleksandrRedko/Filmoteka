const BASE_URL = 'https://api.themoviedb.org/';
const key = 'api_key=14f90a9673a8e38c0e2c74de4fe9bbab';
export default class MoviesApiServise {
 
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.totalPage = 0;
    
  }
  
  async fetchPopularMovies() {    
    
    const url = `${BASE_URL}3/trending/all/day?${key}&page=${this.page}`;
    
    const response = await fetch(url);
    const data = await response.json();
     this.totalPage = await data.total_pages ;
 
    return data;
  }

 async fetchMovies(){
    
    const url = `${BASE_URL}3/search/movie?${key}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=true`;
    const response = await fetch(url);
    const data = await response.json();
    this.totalPage = await data.total_pages ;
  
    return data;
 }

 async fetchMovieById(id) {  
  
  const url = `${BASE_URL}3/movie/${id}?${key}&language=en-US`;  
  const response = await fetch(url);
  const data = await response.json();   
  
  return data;
}


  resetPage() {
    this.page = 1;
    
  }
  incrementPage() {
    if(this.page !== this.totalPage){  
          
        this.page += 1;
        console.log(this.page);  
    }  
   
  
  }
  dincrementPage() {
    if(this.page !== 1){        
        this.page -= 1;
    }    
  }
  get query(){
    return this.searchQuery;
  }
set query(newQuery){
    this.searchQuery = newQuery; 
}



}
