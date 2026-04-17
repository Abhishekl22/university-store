// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Replace the brands import with this
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faGraduationCap,
  faPhone,
  faCircleQuestion,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faKey,
  faBars,
  faTimes,
  faUniversity
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar({ isLoggedIn, currentUser, onLogout }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <FontAwesomeIcon icon={faUniversity} className="logo-icon" />
          <span className="logo-text">Edu<span className="logo-highlight">Store</span></span>
        </Link>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faGraduationCap} /> About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faPhone} /> Contact</Link></li>
            <li><Link to="/support" onClick={() => setIsMobileMenuOpen(false)}><FontAwesomeIcon icon={faCircleQuestion} /> Support</Link></li>
          </ul>

          <div className="nav-buttons">
            {isLoggedIn ? (
              <>
                <Link to="/change-password" className="nav-btn btn-outline" onClick={() => setIsMobileMenuOpen(false)}>
                  <FontAwesomeIcon icon={faKey} /> Change Password
                </Link>
                <button onClick={handleLogout} className="nav-btn btn-logout">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-btn btn-register" onClick={() => setIsMobileMenuOpen(false)}>
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </Link>
                <Link to="/login" className="nav-btn btn-login" onClick={() => setIsMobileMenuOpen(false)}>
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;