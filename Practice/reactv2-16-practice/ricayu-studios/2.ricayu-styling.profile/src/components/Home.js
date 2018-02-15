import React from 'react';
import {Fade} from 'react-slideshow-image';

import band from './../images/band.jpg';
import cake from './../images/cake.jpg';
import engagement from './../images/engagement.jpg';
import football from './../images/football.jpg';
import oceanportrait from './../images/oceanportrait.jpg';
import tie from './../images/tie.jpg';

const images = [band, engagement,football, oceanportrait];

const Home = () => (
    <div className='BackgroundBlack'>
        <div className="BackgroundImage">
            <h1></h1><h1></h1>
            <h1 className="Theme-White" className='Theme-Title'>Capturing the Magic of Every Day.</h1>
            <div className="Theme-Carousel"><Fade images={images} duration="5000" transitionDuration="1000"/></div>
        </div>
    </div>
)
export default Home;