import React from 'react';
import './AboutUs.css'; // CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      
       
        

      <section className="about-us-section">
        <h1>About Me</h1>
        <p>
        I’m "Abhishek Gautam" a passionate web developer with expertise in building dynamic and user-friendly applications using React.js. and other also python, java, nodejs etc..
        I enjoy solving complex problems with elegant solutions.
        </p>
      </section>

      

      <section className="about-us-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Bus ticket bookings</li>
          <li>Train ticket bookings</li>
          <li>Car rental services</li>
          
        </ul>
      </section>

      <section className="about-us-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or inquiries, feel free to reach out to us.
          We are here to help you with all your travel needs.
        </p>
        <p>Email: gautamabhishekcs222328@gmail.com</p>
        <p>Phone: +91 7398415592</p>
      </section>
    </div>
  );
};

export default AboutUs;
