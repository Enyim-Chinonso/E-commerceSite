import React from 'react';
import picture from "../assets/my-pix.jpg"

function About() {
  return (
    <div style={{backgroundColor: "#f0f0f0", minHeight: "100vh"}} >
    <div className="container mt-5 text-center">
      <h1>About Us</h1>
      <p className="lead">
        Welcome to E-Shop! <br /> We’re dedicated to providing high-quality products at affordable and convenient prices.
        Our mission is to make shopping simple, transparent, seamless and satisfying for everyone.
      </p>
      <img 
          src={picture} 
          alt="About us" 
          className="img-fluid rounded shadow my-4" 
          style={{ maxWidth: "300px", height: "auto" }} 
        />
      <h5 className="fw-bold text-secondary">Enyim Chinonso <span className="text-muted">_ Software Engineer</span></h5> <br />

    </div>
   </div>
  );
}   

export default About;
