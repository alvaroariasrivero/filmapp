import React, { Fragment } from "react";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { useDataLoader } from 'react-use-data-loader';
import { CircleLoader } from "react-spinners";

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
    ? <CircleLoader color='rgba(248,212,51,1)' size={100}/>
    :(<section className="details">
        <div className="poster">
          <img src={data.poster} alt='film_poster' className="poster__content"></img>
        </div>
        <div className="info">
          <h3 className="title">{data.title}</h3>
          <p><b>Released:</b> {data.released}</p>
          <p>{data.plot}</p>
          <p><b>Cast:</b> {data.actors}</p>
          <p><b>Genre:</b> {data.genre}</p>
          <p><b>Writer:</b> {data.writer}</p>
        </div>
      </section>)}
  </Fragment>;
};

export default FilmsDetail;
