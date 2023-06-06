import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Image = 'https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'

const AboutPage = () => {
  return (
    // <div>

    // <div>
    //   <h1>About Us</h1>
    //   <p>Welcome to our website! We are a team dedicated to providing high-quality products/services.</p>
    //   <p>Our mission is to deliver excellence and exceed customer expectations.</p>
    //   <p>Feel free to explore our website and contact us if you have any questions.</p>
    // </div>
 
   
    // </div>

    <Container>
    <div style={{ display: 'flex' }}>
      <img
        src= {Image}
        alt="Left Image"
        style={{ float: 'left', marginRight: '100px', width: '50%', height: '50%' }}
      />
      <div>
        <h1>About Us</h1>
        <p>Welcome to our website! We are a team dedicated to providing high-quality products/services.</p>
        <p>Our mission is to deliver excellence and exceed customer expectations.</p>
        <p>Feel free to explore our website and contact us if you have any questions.</p>
      </div>
    </div>
  </Container>
    
  );
}

export default AboutPage;