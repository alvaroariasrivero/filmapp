import React from "react";
import image from '../../assets/No_Image_Available.jpg'

const FilmsCard = ({film}) => {

  const {title, year, poster} = film;

  if(poster == 'N/A'){
    return <div>
    <img src={image} alt="image" />
    <p>{title}</p>
    <p>{year}</p>
  </div>;
  } else {
    return <div>
    <img src={poster} alt="" />
    <p>{title}</p>
    <p>{year}</p>
  </div>;
  }
  
};

export default FilmsCard;
