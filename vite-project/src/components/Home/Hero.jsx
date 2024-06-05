import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className='hero-text'>
                <div className='pharagraph'>
                    <h1>Air, sleep, dream</h1>
                    <p>Find and book a great experience.</p>
                </div>

                <button>Start your search</button>


            </div>
            <div className="search-bar">
                <div className='input'>
                <input type="text" placeholder="Flying from" />
                <input type="text" placeholder="Flying to" />
                <input type="date" placeholder="Departure" />
                <input type="date" placeholder="Return" />
                <button className="search-button">Search</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
