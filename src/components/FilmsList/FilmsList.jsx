import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import FilmsCard from '../FilmsCard'

const FilmsList = () => {

  const[title, setTitle] = useState('')
  const[currentPage, setCurrentPage] = useState(1)
  const[films, setFilms] = useState([])
  const[totalFilms, setTotalFilms] = useState()
  const [filmsPerPage] = useState(10);

  useEffect(() => {
    async function fetchFilms(){
      try {
        const res = await axios.get(`https://omdbapi.com/?s=${title}&type=movie&page=${currentPage}&apikey=${process.env.REACT_APP_API_KEY}`);
        const json = res.data;
        console.log(json);
        setTotalFilms(json.totalResults)
        const search = json.Search
        const filmsArray = search.map(element => {
          return {
            'title': element.Title,
            'year': element.Year,
            'poster': element.Poster,
            'imdbId': element.imdbID
          }
        })
        console.log(filmsArray)
        setFilms(filmsArray)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchFilms()
  }, [title, currentPage]);

  const paintCards = () => films.map((film, i) => <Link to={`/details/?imdb=${film.imdbId}`} key={i}><FilmsCard film={film}/></Link>)

  const nextPage = () => {
    if(currentPage !== Math.ceil(totalFilms/filmsPerPage) && totalFilms/filmsPerPage >= 1){
      setCurrentPage(currentPage+1)
    }
  }

  const prevPage = () => {
    if(currentPage !==1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const film = event.target.elements.film.value
    setCurrentPage(1)
    setTitle(film)
  }

  return <Fragment>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Film..." name='film'/>
            <input type="submit"/>
          </form>
          <div>{paintCards()}</div>
          <button onClick={prevPage}>Prev</button>
          <p>{currentPage}</p>
          <button onClick={nextPage}>Next</button>
        </Fragment>;
};

export default FilmsList;
