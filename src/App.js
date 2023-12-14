import React from 'react';
import './App.css';

const HorribleDesignCompetition = () => {
  return (
    <div className="delivery-container">
      <div className="delivery-header">🚬 Welcome to AASTU Cigarette Delivery Service 🚬</div>
      <img src="horrible-image.jpg" alt="Cigarette Delivery" className="horrible-image" />
      <div className="delivery-content">
        <div className="delivery-text">
          The first cigarette I ever smoked was when I was 10 or 11 years old. It was with a group of my friends...
        </div>
        <div className="delivery-text">
          <h1 className="delivery-title">Smoking is just like get a freelace jobs</h1>
          <p>
          So you need the perfect smoke to fuel your creativity. Our exclusive AASTU Cigarette Delivery Service is here to provide you with a
            mind-boggling variety of cigarettes tailored to your freelance needs.
          </p>
    
        </div>
        <div className="delivery-image">
          <img src="stack-of-cigarettes.jpg" alt="Stack of Cigarettes" />
        </div>
        <div className="delivery-text">
          <h1 className="delivery-title"> At AASTU Dorm... Just Smoking!</h1>
          <p>
            I took these pics out in my back yard over the last couple of days. I Love just chillin out and smoking in the backyard...
          </p>
        </div>
        <div className="delivery-image">
          <img src="image1.jpg" alt="Stack of Cigarettes" />
        </div>
      </div>
      <div className="delivery-form">
        <h2>Exclusive Cigarette Delivery for AASTU Students</h2>
        <form>
          <label>Select your preferred cigarette flavor:</label>
          <select>
            <option value="confusion">Confusion Blend</option>
            <option value="mystery">Mystery Mint</option>
            <option value="chaos">Chaos Cherry</option>
          </select>
          <br />
          <label>Choose the quantity:</label>
          <input type="number" />
          <br />
          <label>Provide your chaotic delivery address:</label>
          <textarea></textarea>
          <br />
          <button>Experience the Confusion</button>
        </form>
      </div>
      <div className="promotion-section">
        <h2 className="promotion-title">🌟To get A+ any  Course 🌟</h2>
        <p className="promotion-text">
          If you are a student at AASTU, you can get A+ in any course by smoking 10 packs of cigarettes per day. This is a
          limited time offer. Hurry up and enroll now!
        </p>
        <button className="enroll-button">when Smok the first time</button>
      </div>
    </div>
  );
};

export default HorribleDesignCompetition;
