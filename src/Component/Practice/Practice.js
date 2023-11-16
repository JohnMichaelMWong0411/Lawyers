import './Practice.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
const Practice = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div id="Practice" class="Practice-container">
            <div class="Practice-Title" data-aos="fade-up" data-aos-duration="1000">
                <h1>Practice <span>Areas</span></h1>
                <p>Explore our practice areas that suit your needs. </p>
            </div>
            <div class="accordion" data-aos="fade-up" data-aos-duration="1000">
            <ul>
                <li>
                <div> <a href="#">
                    <h2>Civil Litigation</h2>
                    </a> </div>
                </li>
                <li>
                <div> <a href="#">
                    <h2>Corporate Law</h2>
                    </a> </div>
                </li>
                <li>
                <div> <a href="#">
                    <h2>Commercial Litigation</h2>
                    </a> </div>
                </li>
                <li>
                <div> <a href="#">
                    <h2>Local Goverment</h2>
                    </a> </div>
                </li>
                <li>
                <div> <a href="#">
                    <h2>Immigration</h2>
                    </a> </div>
                </li>
                <li>
                <div> <a href="#">
                    <h2>Criminal Litigation</h2>
                    </a> </div>
                </li>
            </ul>
            </div>
        </div>
    );
}
export default Practice;