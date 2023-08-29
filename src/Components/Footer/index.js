import React from "react";
import logo from '../Utilis/images/logo.png';
import { Typography, Link, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import './style.css'

const pages = ['Home', 'About Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Footer() {
    return (
        <footer className="footer">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="footer-section">
                        <Typography variant="h6" className="footer-heading">
                           Links
                        </Typography>
                        <ul className="footer-list">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link href="#">{page}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className="footer-section">
                        <Typography variant="h6" className="footer-heading">
                            Contact Us
                        </Typography>
                        <div className="social-icons">
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                    <div className="footer-section">
                        <ul className="footer-list">
                        </ul>
                    </div>
                </Grid>
            </Grid>

            <Typography variant="body2" align="center" className="copyright">
                &copy; {new Date().getFullYear()} ayaalhomran 2023 house
            </Typography>
        </footer>
    );
}

export default Footer;