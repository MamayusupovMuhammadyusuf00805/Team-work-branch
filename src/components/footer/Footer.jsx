import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-links-section">
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">F.A.Q</a></li>
            </ul>
          </div>
          
          <div className="footer-column global-select">
            <select className="language-select">
              <option value="en">Global</option>
            </select>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2021 Yogi.com</p>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;