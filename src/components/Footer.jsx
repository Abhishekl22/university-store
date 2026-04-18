import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faHome,
  faInfoCircle,
  faBox,
  faHeadset,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand & Contact Section */}
        <div className="footer-left">
          <div className="footer-brand">
            <FontAwesomeIcon icon={faGraduationCap} className="brand-icon" />
            <h2>EduStore</h2>
          </div>
          <p className="footer-description">
            Your trusted partner for quality educational products and university resources.
          </p>
          <div className="footer-contact">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>abhishekrana23da@gmail.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 86792-01047</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Chandigarh, India</span>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-right">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li><a href="/about"><FontAwesomeIcon icon={faInfoCircle} /> About Us</a></li>
              <li><a href="/products"><FontAwesomeIcon icon={faBox} /> Products</a></li>
              <li><a href="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
              <li><a href="/support"><FontAwesomeIcon icon={faHeadset} /> Support</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://github.com/abhishekl22/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-rana099" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 EduStore. All rights reserved. Made with ❤️ by Abhishek Rana</p>
      </div>
    </footer>
  );
};

export default Footer;