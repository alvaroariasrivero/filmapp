import React, { Fragment } from "react";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { useDataLoader } from 'react-use-data-loader';

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
    console.log(dataFilm)
    return dataFilm
  } catch (error) {
    console.log('Error', error);
  }
}

const FilmsDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loading } = useDataLoader(filmDetails, searchParams.get('imdb'))
  return <Fragment>
    {loading 
    ? <p>Loading</p>
    :<p>{data.plot}</p>}
  </Fragment>;
};

export default FilmsDetail;
