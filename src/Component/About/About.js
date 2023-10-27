import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="About" className="About-container">
            <div className='aboutContent' data-aos="fade-up" data-aos-duration="2000">
                <h1>About <span>Lawyers</span></h1>
                <p>Welcome to Lawyers, a trusted legal partner dedicated to providing expert 
                    legal services to individuals, businesses, and organizations. With a commitment to excellence,
                    integrity, and personalized client care, we have been serving our community for 10 years.</p>
                <p>At Lawyers, we understand that legal issues can be complex and daunting. 
                    That's why our team of experienced attorneys is here to guide you through the legal process, 
                    offering clear, effective solutions tailored to your unique needs. We are proud to be a beacon 
                    of support in times of legal uncertainty.
                </p>
            </div>       
        </div>
    );
}

export default About;
