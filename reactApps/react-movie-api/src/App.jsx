import { useState } from 'react'
import './App.css'
function App() {
  //setup the state for the App component
  // initial value is an array with 2 objects, each obj is a movie
  const [movies, setMovies] = useState([
    
  ])

const [searchTerm, setSearchTerm] = useState("")

let moviesJSX = movies.map(movie => (
  <div key={movie.id} style={{marginBottom: "5rem"}}>
    <img src={ "https://image.tmdb.org/t/p/w185" + movie.poster_path} alt="poster" />
    <h2>{movie.title}</h2>
    <p>{movie.overview}</p>
  </div>
))

//create a controlled component
let searchChangeHandler = (event) => {
setSearchTerm(event.target.value)
}

//function runs a search on the api
const performSearch = () => {

  const baseUrl= `https://api.themoviedb.org/3`
  const route= `/search/movie?api_key=${`9c07b129a151f78da35bcea279a2dca1`}&query=${searchTerm}`
  const endpoint = baseUrl + route;


  fetch(endpoint)
  .then(res => res.json())
  .then(data => {
//store the received movies in the state object "movies"
setMovies(data.results)
setSearchTerm("")
  })
  .catch(err => {
    console.log(err)
  })
}

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <div className="searchBar">
        <input id="inputField" type="text" placeholder="Enter a movie title" onChange={searchChangeHandler} 
        value={searchTerm}/>
        <button onClick={() => {performSearch(searchTerm)}}>Search</button>
      </div>

      {moviesJSX}

    </div>
  )
}
export default App