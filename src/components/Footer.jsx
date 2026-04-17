import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About EduStore</h3>
          <p>Your one-stop destination for quality educational products and university merchandise.</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>123 University Ave, City</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span>+1 234 567 890</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@edustore.com</span>
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe for updates and offers</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email" 
              required 
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; 2024 EduStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;