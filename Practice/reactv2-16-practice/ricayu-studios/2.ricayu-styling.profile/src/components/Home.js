import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import band from './../images/band.jpg';
import cake from './../images/cake.jpg';
import engagement from './../images/engagement.jpg';
import football from './../images/football.jpg';
import oceanportrait from './../images/oceanportrait.jpg';

// const images = [band, engagement,football, oceanportrait]; //tie cake

const Home = () => (
    <div className='BackgroundBlack' >
        <div className="BackgroundImage">
            <h1></h1><h1></h1>
            <h1 className="Theme-White" className='Theme-Title'>Capturing the Magic of Every Day.</h1>
            <div className="Theme-Carousel">
            <Carousel showArrows={true} autoPlay={true} showStatus={false} showIndicators={false} infiniteLoop={true} showThumbs={false} useKeyboardArrows={true} interval={8000} transitionTime={1000}>
                <div>
                   <img src={engagement} />
                </div>
                <div>
                   <img src={football} />
                </div>
                <div>
                   <img src={band} />
                </div>
                <div>
                <img src={oceanportrait} />
                </div>
                <div>
                   <img style={{height: '24.2rem'}} src={cake} />
                </div>
            </Carousel>
            </div>
        </div>
    </div>
)
export default Home;