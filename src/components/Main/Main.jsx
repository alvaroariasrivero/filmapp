import React from "react";
import {Routes, Route} from 'react-router-dom';
// import Login from '../Login';
// import Signup from '../Signup';
import FilmsList from "../FilmsList";
import FilmsDetail from '../FilmsDetail';

const Main = () => {
  return <div>
          <Routes>
            <Route path='/' element={<FilmsList/>}/>
            {/* <Route path='/signup' element={<Signup/>}/>
            <Route path='/search' element={}/> */}
            <Route path='/details' element={<FilmsDetail/>}/>
          </Routes>
        </div>;
};

export default Main;
