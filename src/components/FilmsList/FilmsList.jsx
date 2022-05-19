import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import FilmsCard from '../FilmsCard'
// import './FilmsList.css'

const FilmsList = () => {

  const[title, setTitle] = useState('')
  const[currentPage, setCurrentPage] = useState(1)
  const[films, setFilms] = useState([])
  const[totalFilms, setTotalFilms] = useState()
  const [filmsPerPage] = useState(10);
  // const navigate = useNavigate()

  useEffect(() => {
    async function fetchFilms(){
      try {
        const res = await axios.get(`https://omdbapi.com/?s=${title}&type=movie&page=${currentPage}&apikey=${process.env.REACT_APP_API_KEY}`);
        const json = res.data;
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
        setFilms(filmsArray)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchFilms()
    // navigate(`?title=${title}?currentPage=${currentPage}`)
  }, [title, currentPage]);

  const paintCards = () => films.map((film, i) => <Link to={`/details/?imdb=${film.imdbId}`} target='_blank' key={i}><FilmsCard film={film}/></Link>)

  const nextPage = () => {
    if(currentPage !== Math.ceil(totalFilms/filmsPerPage) && totalFilms/filmsPerPage >= 1){
      setCurrentPage(currentPage+1)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  const prevPage = () => {
    if(currentPage !==1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const film = event.target.elements.film.value
    setCurrentPage(1)
    setTitle(film)
  }

  return <div className="films-list">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Film title..." name='film'/>
            <input type="submit"/>
          </form>
          <div className="container">{paintCards()}</div>
          <div className="pagination">
            <button onClick={prevPage} className='pagination__button'>Prev</button>
            <p className="current">{currentPage}</p>
            <button onClick={nextPage} className='pagination__button'>Next</button>
          </div>
        </div>;
};

export default FilmsList;
