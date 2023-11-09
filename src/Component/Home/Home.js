import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './Home.css';
const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="Home" className="Home-container">
            <div className='homeContent'>
                <div className='homeContentL'></div>
                <div className='homeContentR' data-aos="fade-left" data-aos-duration="2000">
                    <h1><span>Lawyers</span></h1>
                    <h5>“Our Strengths.”</h5>
                    <h5>Your Advantage.”</h5>
                    <div><a href="/register" className="button">Message Us!</a></div>
                </div>
            </div>
        </div>
    );
}
export default Home;
