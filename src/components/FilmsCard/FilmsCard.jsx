import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea'
import image from '../../assets/No_Image_Available.jpg';

const FilmsCard = ({film}) => {

  const {title, year, poster} = film;

  if(poster === 'N/A'){
    return <div>
      <Card sx={{ width: 300, height: 300, margin: 1 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="film_poster"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{year}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>;
  } else {
    return <div>
    <Card sx={{ width: 300, height: 300, margin: 1 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={poster} alt="film_poster"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{year}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>;
  }  
};

export default FilmsCard;
