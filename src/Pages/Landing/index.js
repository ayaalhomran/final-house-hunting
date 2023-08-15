import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import images from '../../Components/Utilis/images/hero.png';
import './style.css'

const Landing = () => {
  return (
    
    <section style={{ textAlign: 'center' }} className="heroo">
            <div className="hero-content">
                <h1>Unlock the door to your ideal home</h1>
                     <Button variant="contained" className='button' style={{ backgroundColor: '#FFC107', marginTop: '16px' }}> search</Button>
            </div>
        </section>
     
    
  );
};

export default Landing;
