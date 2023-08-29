import React, { useEffect, useState } from 'react';
import CardContainer from '../../Components/CardContainer';
import Typography from '@mui/material/Typography';
import { Hero } from '../../Components';
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
                <Hero/>
            <Typography variant="h4" align="center" gutterBottom style={
                {
                    paddingTop: '30px',
                    fontWeight: 'bold',
                    color:'#2455A9',
                }
            }>
            Best Collection On Sale</Typography>
            <Typography variant="p" align="center" gutterBottom style={
                {
                    paddingBottom: '1px',
                    fontWeight: 'bold',
                    color:'#1a1a1a',
                    display:'flex',
                    textAlign:'center',
                    justifyContent:'center'
                }
            }>Get your dream property right now and get best seller</Typography>
            {console.log(data, 'houses')}
            <CardContainer houses={data} />
        </>
    );
}
export default Landing;