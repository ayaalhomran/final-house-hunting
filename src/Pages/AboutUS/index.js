import React from "react";
import key from "../../Components/Utilis/images/about.png";
import CardMedia from "@mui/material/CardMedia";
import About from "../../Components/Utilis/images/about us.png";
import "./style.css"; 

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <CardMedia
                component="img"
                height="295"
                width="406"
                image={key}
                alt=""
            />
            <div className="image-overlay">
                <h1>About us</h1>
            </div> 
            <div class="flex-container">
    <div>
    <img src={About} className='About' style={{width:'400px',height:'400px'}}/>

    </div>
    <div class="text" style={{marginLeft:'20px'}}>
        <h3 className="title" >Houses hunting</h3>
        <p style={{color:'#1a1a1a'}}>Our operational management is characterised
        by the following words: reliable, engaged, 
            driven, polished, open and professional. 
        We distinguish ourselves from other estate
        agents through our commitment, reliability 
        and by only making promises we can keep. 
        Our vision; to expand while retaining the
            personal touch.</p>
            <p style={{color:'#1a1a1a'}}>Our operational management is characterised
        by the following words: reliable, engaged, 
            driven, polished, open and professional. 
        We distinguish ourselves from other estate
        agents through our commitment, reliability 
        and by only making promises we can keep. 
        Our vision; to expand while retaining the
            personal touch.</p>
            <p style={{color:'#1a1a1a'}}>Our operational management is characterised
        by the following words: reliable, engaged, 
            driven, polished, open and professional. 
        We distinguish ourselves from other estate
        agents through our commitment, reliability 
        and by only making promises we can keep. 
        Our vision; to expand while retaining the
            personal touch.</p>
            <p style={{color:'#1a1a1a'}}>Our operational management is characterised
        by the following words: reliable, engaged, 
            driven, polished, open and professional. 
        We distinguish ourselves from other estate
        agents through our commitment, reliability 
        and by only making promises we can keep. 
        Our vision; to expand while retaining the
            personal touch.</p>
            <p style={{color:'#1a1a1a'}}>Our operational management is characterised
        by the following words: reliable, engaged, 
            driven, polished, open and professional. 
        We distinguish ourselves from other estate
        agents through our commitment, reliability 
        .</p>
    </div>  
</div>

  </div>    
       
    );
};

export default AboutUs;
