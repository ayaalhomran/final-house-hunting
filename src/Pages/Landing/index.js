import React, { useState, useEffect } from "react";
import { Button, Container, Typography } from '@mui/material';
 import about from '../../Components/Utilis/images/house.png';
import CardContainer from '../../Components/CardContainer'
import './style.css'


const Landing = () => {


  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Fetch houses data from the API
    fetch("https://my-json-server.typicode.com/ayaalhomran/api/house")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data )
        setHouses(data);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (

    <>
      <section style={{ textAlign: 'center' }} className="heroo">
        <div className="hero-content">
          <h1>SWEET HOME FOR SMALL FAMILY</h1>
          <p> Allow us to guide you through the innovative stress-free approach in finding your dream Properties.</p>
          <Button variant="contained" className='button' style={{ backgroundColor: '#FFC107', marginTop: '16px' }}> search</Button>
        </div>
      </section>
      <section className='us'>
        <h1 style={{ color: '#FFC107' }}>about us</h1>
      </section>
      <section className='about-us'>
        <img src={about} className='about-img' />

        <p style={{ color: '#000000' }}>Welcome to our real estate website! We take pride in offering <br /> a comprehensive andistinguished platform designed to facilitate the process of searching and facilitate the process of searching and finding the perfect property for you.
          We <br />understand that real estate represents a significant investment <br />in the lives of individuals and families.to our real estate website! We take pride in offering a comprehensive andistinguished platform designed to facilitate the process of searching and  </p>
      </section>

      <Container maxWidth="lg">
        <div className="housesSection">
          <Typography variant="h3" className="sectionTitle">
            Best Sellers House
          </Typography>
          
          <CardContainer houses={houses} className="card"/>
        </div>
      </Container>
    </>
  );
};

export default Landing;
