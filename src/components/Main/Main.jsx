import React from "react";
import {Routes, Route} from 'react-router-dom';
import FilmsList from "../FilmsList";
import FilmsDetail from '../FilmsDetail';

const Main = () => {
  return <div>
          <Routes>
            <Route path='/' element={<FilmsList/>} exact/>
            <Route path='/details' element={<FilmsDetail/>}/>
          </Routes>
        </div>;
};

export default Main;
