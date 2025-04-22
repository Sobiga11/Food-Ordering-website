import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to Foodie Delight, where we bring delicious food to your doorstep. Our mission is to provide fresh, hot, and tasty meals that satisfy your cravings and make your day better.
        </p>
        <div className="about-pictures">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8O5MP0Xsst9mMTiHlLpz7FvVbKqcNnbVH1XLhr2aGN7rb2_Y6OkvsYeJjtewLPX-0ZM&usqp=CAU" alt="Delicious Food 1" className="about-pic" />
          <img src="https://png.pngitem.com/pimgs/s/43-435298_juice-health-food-breakfast-healthy-food-transparent-background.png" alt="Delicious Food 2" className="about-pic" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AouyNUb4F2E9UY7rv1ksUGoq2ZOo8KMbUD-c_EhGo_D80eNU_X9LRpCj_3dyiZde5So&usqp=CAU" alt="Delicious Food 3" className="about-pic" />
        </div>
        <p className="about-description">
          Our team of chefs and delivery personnel work tirelessly to ensure that you receive your orders on time and in perfect condition. Thank you for choosing Foodie Delight!
        </p>
      </div>
    </div>
  );
};

export default About;
