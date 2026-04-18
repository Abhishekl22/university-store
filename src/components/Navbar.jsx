// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  faUniversity,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ isLoggedIn, currentUser, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Update cart count from localStorage
  const updateCartCount = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const email = currentUser?.email || 'guest';
    const cartKey = `cart_${email}`;
    const savedCart = localStorage.getItem(cartKey);
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    } else {
      setCartCount(0);
    }
  };

  // Listen for storage changes and update cart count
  useEffect(() => {
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cart-update', updateCartCount);
    
    // Update when user logs in/out
    const handleUserChange = () => updateCartCount();
    window.addEventListener('user-login', handleUserChange);
    window.addEventListener('user-logout', handleUserChange);
    
    // Force cart update event
    const handleForceUpdate = () => updateCartCount();
    window.addEventListener('force-cart-update', handleForceUpdate);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cart-update', updateCartCount);
      window.removeEventListener('user-login', handleUserChange);
      window.removeEventListener('user-logout', handleUserChange);
      window.removeEventListener('force-cart-update', handleForceUpdate);
    };
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
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
            {/* Cart Icon */}
            <button className="cart-icon-btn" onClick={handleCartClick}>
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

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
};

export default Navbar;