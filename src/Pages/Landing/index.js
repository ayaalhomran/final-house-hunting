import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
// import images from '../../Components/Utilis/images/hero.png';
import CardContainer from '../../Components/CardContainer';
import './style.css'

const Landing = () => {
   const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ayaalhomran/api/house')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('ERROR', error));
    }, []);
  return (
    <>
    <section style={{ textAlign: 'center' }} className="heroo">
            <div className="hero-content">
                <h1>Unlock the door to your ideal home</h1>
                     <Button variant="contained" className='button-search' 
                     style={{ backgroundColor: '#FFC107', marginTop: '16px' }}> search</Button>
            </div>
        </section>
        
        {/* {console.log(data, 'houses')} */}
        <CardContainer houses={data} />
        </>
  );
};  


export default Landing;
