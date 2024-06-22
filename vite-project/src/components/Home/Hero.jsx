import React from 'react';
import './Hero.css';


const Hero = () => {
    

    return (
        <section className="hero">
            <div className="herol">
                <div className='hero-text'>
                    <div className='pharagraph'>
                        <h1>Air, sleep, dream</h1>
                        <p>Find and book a great experience.</p>
                    </div>
                </div>
                <div className="search-bar">
                    <div className='input'>
                        <input type="text" placeholder="Tour"/>
                        
                        
                        <button className="search-button">Search</button>
                    
                        
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
