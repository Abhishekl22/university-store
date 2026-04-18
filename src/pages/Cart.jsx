import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowLeft, faTrash, faMinus, faPlus, faUniversity, faCheckCircle, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [cartLoaded, setCartLoaded] = useState(false);
  const navigate = useNavigate();

  // Get cart from localStorage on component mount
  const loadCart = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const email = currentUser?.email || 'guest';
    const cartKey = `cart_${email}`;
    const savedCart = localStorage.getItem(cartKey);
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    } else {
      setCartItems([]);
    }
    setCartLoaded(true);
  };

  useEffect(() => {
    loadCart();
    
    // Listen for storage changes from other pages
    window.addEventListener('storage', loadCart);
    
    // Also listen for custom cart-update events
    const handleCartUpdate = () => loadCart();
    window.addEventListener('cart-update', handleCartUpdate);
    
    // Reload cart when page becomes visible (user clicks on cart tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadCart();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Reload cart when window gains focus
    const handleFocus = () => loadCart();
    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('storage', loadCart);
      window.removeEventListener('cart-update', handleCartUpdate);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // Save cart to localStorage whenever it changes (only after initial load)
  useEffect(() => {
    if (!cartLoaded) return;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const email = currentUser?.email || 'guest';
    const cartKey = `cart_${email}`;
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
    window.dispatchEvent(new Event('cart-update'));
  }, [cartItems, cartLoaded]);

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setIsCheckingOut(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Clear cart from localStorage
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const email = currentUser?.email || 'guest';
      const cartKey = `cart_${email}`;
      localStorage.removeItem(cartKey);
      
      // Clear cart state
      setCartItems([]);
      setIsCheckingOut(false);
      setShowPaymentSuccess(true);
      
      // Dispatch events to update navbar cart count to 0
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new Event('cart-update'));
      
      // Force immediate update by dispatching custom event
      window.dispatchEvent(new CustomEvent('force-cart-update', { detail: { count: 0 } }));
    }, 2000);
  };

  const handleContinueShopping = () => {
    setShowPaymentSuccess(false);
    navigate('/');
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="container">
          <Link to="/" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
          </Link>
          <h1><FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart</h1>
          <p>{getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </div>

      <div className="cart-content">
        <div className="container">
          <div className="cart-layout">
            {/* Cart Items Section */}
            <div className="cart-items-section">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <FontAwesomeIcon icon={faShoppingCart} className="empty-cart-icon" />
                  <h2>Your Cart is Empty</h2>
                  <p>Browse our universities and add some merchandise to your cart!</p>
                  <Link to="/" className="continue-shopping-btn">
                    <FontAwesomeIcon icon={faUniversity} /> Browse Universities
                  </Link>
                </div>
              ) : (
                <div className="cart-items-list">
                  {cartItems.map(item => (
                    <div key={item.id} className="cart-item-card">
                      <div className="item-image">
                        {item.image ? (
                          <img src={item.image} alt={item.name} />
                        ) : (
                          <div className="item-placeholder">
                            <FontAwesomeIcon icon={faUniversity} />
                          </div>
                        )}
                      </div>
                      <div className="item-details">
                        <div className="item-university">{item.university}</div>
                        <h3>{item.name}</h3>
                        <p className="item-description">{item.description}</p>
                        <div className="item-price">${item.price.toFixed(2)}</div>
                      </div>
                      <div className="item-actions">
                        <div className="quantity-control">
                          <button 
                            className="quantity-btn"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                        <div className="item-subtotal">${getSubtotal(item)}</div>
                        <button 
                          className="remove-btn"
                          onClick={() => handleRemoveFromCart(item.id)}
                          title="Remove item"
                        >
                          <FontAwesomeIcon icon={faTrash} /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Order Summary Section */}
            {cartItems.length > 0 && (
              <div className="order-summary">
                <div className="summary-card">
                  <h2>Order Summary</h2>
                  
                  <div className="summary-row">
                    <span>Subtotal ({getTotalItems()} items)</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span className="free-shipping">FREE</span>
                  </div>
                  
                  <div className="summary-row">
                    <span>Tax (8%)</span>
                    <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <div className="summary-divider"></div>
                  
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
                  </div>

                  <button 
                    className="checkout-btn" 
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? (
                      <><span className="spinner"></span> Processing...</>
                    ) : (
                      <><FontAwesomeIcon icon={faCreditCard} /> Proceed to Checkout</>
                    )}
                  </button>

                  <Link to="/" className="continue-shopping-link">
                    Continue Shopping
                  </Link>

                  <div className="secure-checkout">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Secure checkout powered by EduStore</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Success Modal */}
      {showPaymentSuccess && (
        <div className="payment-modal-overlay">
          <div className="payment-success-modal">
            <div className="success-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <h2>Payment Successful!</h2>
            <p>Your order has been placed successfully.</p>
            <p className="order-total">Total Paid: ${(getTotalPrice() * 1.08).toFixed(2)}</p>
            <button className="continue-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
