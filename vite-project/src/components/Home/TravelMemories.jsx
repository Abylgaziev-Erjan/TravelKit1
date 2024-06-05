import React from 'react';
import './TravelMemories.css';
import User1 from '../../assets/images/user1.png'
import User2 from '../../assets/images/user2.png'
import User3 from '../../assets/images/user3.png'

const TravelMemories = () => {
  return (
    <section className="travel-memories">
      <h2>Travel to make memories all around the world</h2>
      <div className="memories">
        <div className="memory">
          <img src={User1} alt="Memory" />
          <p>Find trips that fit a flexible lifestyle</p>
        </div>
        <div className="memory">
          <img src={User2} alt="Memory" />
          <p>Travel with more confidence</p>
        </div>
        <div className="memory">
          <img src={User3} alt="Memory" />
          <p>See what’s really included</p>
        </div>
      </div>
    </section>
  );
};

export default TravelMemories;
