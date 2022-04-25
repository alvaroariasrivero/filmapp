import React from "react";
import {Routes, Route} from 'react-router-dom';
import FilmsList from "../FilmsList";

const Main = () => {
  return <div>
          <Routes>
            <Route path='/' element={<FilmsList/>} exact/>
          </Routes>
        </div>;
};

export default Main;
