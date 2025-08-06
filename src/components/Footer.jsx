// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin, FaGithub, FaSlack, } from 'react-icons/fa';
import './Footer.css'; // Custom styles

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: enyimchinonso23@gmail.com</p>
            <p>Phone: +234 810 811 1761</p>
            <p>Location: Ebonyi-Abakaliki, Nigeria</p>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://facebook.com/Chinonso Enyim" className="footer-icon"><FaFacebook /></a>

              <a href="#" className="footer-icon"><FaInstagram /></a>

              <a href="#" className="footer-icon"><FaTwitter /></a>

              <a href="https://wa.me/8108111761" className="footer-icon"><FaWhatsapp /></a>

              <a href="https://www.linkedin.com/in/chinonso-enyim-1435762a1/" className="footer-icon"><FaLinkedin /></a>

              <a href="https://github.com/Enyim-Chinonso" className="footer-icon"><FaGithub /></a>

              <a href="https://slack.com/Enyim Chinonso" className="footer-icon"><FaSlack /></a>
              
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
