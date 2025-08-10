import React from "react";
import ScrollSection from "../components/ScrollSection";
import "./Home.css";
import videoBg from "../assets/bg-video.mp4";
import bgImage from "../assets/bg-image.jpg";

function Home() {
  return (
    <>
      <div className="home-container">
        {/* 🔹 Background Video */}
        <video autoPlay loop muted className="background-video">
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔹 Image Overlay + Dark Layer */}
        <div
          className="background-overlay"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="dark-overlay"></div>

        {/* 🔹 Hero Content */}
        <div className="home-content container text-center text-white">
          <h1 className="display-4">Welcome to my e-commerce website</h1>
          <p className="lead">Shop the best products at convenient prices</p>

          <a href="/products" className="btn btn-outline-light btn-lg mt-4">
            Browse Products
          </a>
          <br />
          <a href="/contact" className="btn btn-outline-light btn-lg mt-3">
            Let's Talk
          </a>
        </div>
      </div>

      {/* ✅ Scroll Section AFTER hero area */}
      <div className="scroll-sections">
        <ScrollSection />
      </div>
    </>
  );
}

export default Home;
