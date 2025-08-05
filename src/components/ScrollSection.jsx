import React from 'react';
import supermarketImg from "../assets/supermarket-image.jpg";
import groceryImg from "../assets/grocery-image.jpg";
import apparelImg from "../assets/apparel-image.jpg";
import shoppingImg from "../assets/shopping-online.jpg";
import muslimwoman from "../assets/Muslim woman.jpg";
import aiShopper from "../assets/ai-generated-shopper.webp";
import bgImage from "../assets/bg-image.jpg";
import clothPiles from "../assets/cloth piles shop.jpg";
import shopFamily from "../assets/shopping family.jpg";
import "./ScrollSection.css";

function ScrollSection() {
  const images = [
    groceryImg,
    supermarketImg,
    shoppingImg,
    muslimwoman,
    aiShopper,
    bgImage,
    apparelImg,
    clothPiles,
    shopFamily,
  ];

  return (
    <div style={{ backgroundColor: "#f0f0f0"}}>
    <div className="container my-5">
      <h3 className="text-center mb-4" data-aos="fade-down">Top Categories</h3>

      <div className="row g-4">
        {images.map((img, index) => (
          <div
            className="col-12 col-sm-6 col-md-4"
            key={index}
            data-aos="fade-up"
          >
            <img
              src={img}
              alt={`category-${index}`}
              className="img-fluid rounded shadow zoom-img"
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ScrollSection;
