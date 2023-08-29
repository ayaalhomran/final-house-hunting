import * as React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import './style.css'; // Assuming you have your custom styles

export default function HouseCard({ house }) {
    const [liked, setLiked] = React.useState(false);
    const { id, url, address, price, description, bedroom, bathroom, title, type } = house;

    const handleLikeToggle = () => {
        setLiked(!liked);
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}> {/* Adjust the column sizes as needed */}
            <Card sx={{ maxWidth: '100%' }} className='imgCard' style={{ marginTop: '20px', borderRadius: '12px', overflow: 'hidden' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        width="100%"
                        image={url}
                        alt="House"
                    />
                    <FavoriteIcon
                        sx={{
                            color: liked ? 'red' : 'white', 
                            position: 'absolute',
                            top: '13px',
                            right: '17px',
                            zIndex: 1,
                            fontSize: '30px'
                        }}
                        onClick={handleLikeToggle}
                    />
                    <CardContent>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            {description.slice(0, 100)}
                        </Typography>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div className='icon' style={{ display: 'flex', alignItems: 'center', fontSize: '11px' }}>
                                <AddLocationAltIcon style={{ padding: "3px 10px 0 0", fontSize: '16px',color:'#1D5D9B' }} />
                                {address}
                            </div>
                            <div className='icon' style={{ display: 'flex', alignItems: 'center' }}>
                                <AttachMoneyIcon style={{ padding: "0px 3px 0px 2px", color: '#1D5D9B', fontSize: '18px' }} />
                                {price}
                            </div>
                        </div>
                        <Typography className='icon' style={{ display: 'flex', alignItems: 'center' }}>
                            <LocalHotelIcon style={{ padding: "3px 10px 0 0", fontSize: '20px',color:'#1D5D9B' }} />
                            {bedroom}
                            <BathtubIcon style={{ padding: "0px 10px 0 11px",color:'#1D5D9B' }} />
                            <span>{bathroom}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='cardActions'>
                    <Link to={`/Details/${id}`} style={{
                        backgroundColor: '#F4D160',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontFamily: 'Istok Web',
                        fontSize: '18px',
                        textDecoration: 'none',
                        width: '100%',
                        height: '30px',
                        color:'#1A1A1A'
                    }}>
                        More Details
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}
