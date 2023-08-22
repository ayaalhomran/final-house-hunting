

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Grid } from '@mui/material';


// export default function MediaCard({house}) {

//    // const {title,url} = house
//   return (
// <>

//            <Card sx={{ maxWidth: 345 }}>

//        <CardMedia
//         sx={{ height: 140 }}
//         // image={url}
//         // title={title}
//         />
    


//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
   
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
          
       
        
     
// </>

     
   
//     // <Card sx={{ maxWidth: 345 }}>
//     //   <CardMedia
//     //     sx={{ height: 140 }}
//     //     image="/static/images/cards/contemplative-reptile.jpg"
//     //     title="green iguana"
//     //   />
//     //   <CardContent>
//     //     <Typography gutterBottom variant="h5" component="div">
//     //       Lizard
//     //     </Typography>
//     //     <Typography variant="body2" color="text.secondary">
//     //       Lizards are a widespread group of squamate reptiles, with over 6,000
//     //       species, ranging across all continents except Antarctica
//     //     </Typography>
//     //   </CardContent>
//     //   <CardActions>
//     //     <Button size="small">Share</Button>
//     //     <Button size="small">Learn More</Button>
//     //   </CardActions>
//     // </Card>

    
//   );
// }



// import  React from 'react';
// import Cards from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import image from '../Utilis/images/house.png';
// import HotelIcon from '@mui/icons-material/Hotel';
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import './style.css';
// export default function MediaCard() {
//   return (
//     <Cards sx={{ maxWidth: 300 }}
//     style={{ marginTop: '20px', }}>
//       <img src={image} className='image'/>
//       <CardMedia
//         sx={{ height: 160}}
//         // image="/static/images/cards/contemplative-reptile.jpg"
//         // title="green iguana"
//       />
//       <CardContent>
//         <Typography component="div"  >
//           <div className='qq'> <HotelIcon  className='icon'/> <p className='w'>bd 3</p> <BathtubIcon className='icon'/> <p className='w'>ba 2</p> </div>
//         </Typography>
//         <Typography gutterBottom variant="h5" component="div"
//          style={{
//                                       alignItems: 'center',
//                                       fontWeight: 'bolder',
//                                       fontSize: '20px',
//                                       color:'#000839'
//                                   }}>
//         Family Home
//         </Typography>
//         <Typography variant="body2" color="text.secondary"
//            style={{
//             alignItems: 'center',
//             // fontWeight: 'bolder',
//             fontSize: '15px',
//             color: '#777'
//         }}>
//         Ther are many variations of passayes of Lorem  availble.
//         </Typography>
//         <Typography  style={{
//                         display:'flex',
//                         alignItems:'center' ,
//                         justifyContent:'space-between',
//                         color:'#000839'
//                                   }}>
//           <div style={{
//             display :'flex'
//           }}> <LocationOnIcon style={{marginTop:'10px' }}/>
//           <p style={{
//             color:'#aaa',
//             marginTop:'10px',
//             marginRight:'10px'
//           }}>Gaza - Rafah</p> </div>  <p>$200</p>
//         </Typography>
//         <Typography  style={{
//           display:'flex',
//           alignItems:'center',
//           justifyContent:'space-between'
//           }}>
//         <Button
//                         size="small"
//                         color="primary"
//                         style={{
//                             backgroundColor: '#FFA41B',
//                             color:'#fff',
//                             fontSize: '10px',
//                             width: '50%',
//                             height: '30px',
//                         }}
//                     >
//                         More Details
//                     </Button>
//                     <FavoriteBorderIcon style={{color:'#aaa'}}/>
//         </Typography>
//       </CardContent>
//     </Cards>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BathroomIcon from "@mui/icons-material/Bathroom";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
// import { HOUSES } from '../../Utils/routes.constant';
import "./style.css";



export default function CardComponent({ house }) {
  const {
    id,
    image,
    title,
    description,
    price,
    bedroom,
    bathroom,
  } = house;
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const addToFavorite = async (id) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/ayaalhomran/api/house`
    );
    const item = await response.json();
    fetch(
      "https://my-json-server.typicode.com/ayaalhomran/api/house",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("House added to favorites");
          setIsFavorite(true);
          setOpenSnackbar(true);
        } else {
          console.error("Failed to add to favorites");
        }
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Card elevation="0" className="card" sx={{ borderRadius: '10px' }}>
      <CardActionArea>
        <CardMedia className="media">
          <img src={image} alt="house" />
        </CardMedia>
        <CardContent>
          <div className="cardTitle">
            <Typography gutterBottom variant="h5" component="h2">
              {title.slice(0, 1).toUpperCase() + title.slice(1)}
            </Typography>
          </div>
          {/* <Typography variant="p" component="p" className="description">
            {description.split(" ").splice(0, 10).join(" ")}
          </Typography> */}
          <div>
          </div>
          <div className="cardDetails">
           <div className="oneiconBox">
           <div className="iconBox">
            <LocalHotelIcon className="icon" />
              <Typography style={{color:'#013244'}}>{bedroom} bd </Typography>
            </div>
            <div className="iconBox">
            <BathroomIcon className="icon" />
              <Typography style={{color:'#013244'}}>{bathroom} ba </Typography>
            </div>
           </div>
            {/* <Typography variant="h6"> ${price}</Typography> */}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardaction" >
      {/* <Link to={`${HOUSES}/${id}`} sx={{ bgcolor: '#EB9235',color:"white",fontWeight:'500' }} className="detailsLink">
          more details
        </Link> */}
        <>
          <Button>
            {isFavorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon className="favorite" onClick={() => addToFavorite(id)} />
            )}
          </Button>
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          House added to favorites successfully!
        </Alert>
      </Snackbar>
        </>
      </CardActions>
    </Card>
  );
}
