import React, { Fragment } from "react";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { useDataLoader } from 'react-use-data-loader';
// import loader from 'https://i.gifer.com/74H8.gif';

const filmDetails = async(imdbId) =>{
  try {
    const res = await axios.get(`https://omdbapi.com/?i=${imdbId}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`)
    const dataFilm = {
      'title': res.data.Title,
      'actors': res.data.Actors,
      'genre': res.data.Genre,
      'plot': res.data.Plot,
      'poster': res.data.Poster,
      'rated': res.data.Rated,
      'released': res.data.Released,
      'runtime': res.data.Runtime,
      'writer': res.data.Writer
    }
    return dataFilm
  } catch (error) {
    console.log('Error', error);
  }
}

const FilmsDetail = () => {
  const [searchParams] = useSearchParams();
  const { data, loading } = useDataLoader(filmDetails, searchParams.get('imdb'))
  return <Fragment>
    {loading 
    ? <img src='https://i.gifer.com/JVX7.gif' alt="Loading..."></img>
    :(<section className="details">
        <div className="poster">
          <img src={data.poster} alt='film_poster' className="poster__content"></img>
        </div>
        <div className="info">
          <h3 className="title">{data.title}</h3>
          <p>{data.plot}</p>
          <p>Cast: {data.actors}</p>
          <p>Genre: {data.genre}</p>
          <p>Writer: {data.writer}</p>
        </div>
      </section>)}
  </Fragment>;
};

export default FilmsDetail;
