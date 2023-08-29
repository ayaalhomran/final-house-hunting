import React from "react";
import Box from "@mui/material/Box";
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import {Link} from 'react-router-dom';
import hero from '../Utilis/images/hero.png';
import { useNavigate } from "react-router-dom";


function Hero() {

    const navigate = useNavigate();
    function navToSearch(){
        navigate('/Filter');
    }
    return (
        <div className="hero">
            <div className="hero-overlay">
                <h1>Unlock the door to your ideal home </h1>

                <div className="input-container">
                    <Box sx={{ marginTop: 2 }}>
                    <input type="text" placeholder="Search " onClick={navToSearch}
                            style={{
                                width: '450px',
                                height: '45px',
                                border: '0.2px solid #001D58',
                                borderRadius: '25px',
                                position: 'relative',
                                paddingLeft:'30px'
                            }}
                        />
                        <SearchIcon style={{
                            color: '#1D5D9B',
                            fontSize:'30px',
                            fontWeight:'bolder',
                            position: 'absolute',
                            right: '160',
                            bottom:'10',
                        }} />
                    </Box>
                </div>
            </div>
            <img
                src={hero}
                alt=""
                className="hero-image"
            />
        </div>
    );
}

export default Hero;
