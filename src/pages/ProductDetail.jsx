// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selected = localStorage.getItem('selectedProduct');
    if (selected) {
      setProduct(JSON.parse(selected));
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      alert('Please login to add items to cart');
      navigate('/login');
      return;
    }

    const user = JSON.parse(currentUser);
    const cartKey = `cart_${user.email}`;
    const existingCart = JSON.parse(localStorage.getItem(cartKey) || '[]');
    
    const existingItem = existingCart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      existingCart.push({ ...product, quantity });
    }
    
    localStorage.setItem(cartKey, JSON.stringify(existingCart));
    alert('Product added to cart!');
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('cart-update'));
  };

  if (!product) return null;

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>
          <p className="price">${product.price}</p>
          <p className="stock">In Stock: {product.quantity} units</p>
          
          <div className="quantity-selector">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              max={product.quantity}
              value={quantity}
              onChange={(e) => setQuantity(Math.min(product.quantity, Math.max(1, parseInt(e.target.value) || 1)))}
            />
          </div>
          
          <div className="product-actions">
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="back-btn" onClick={() => navigate('/products')}>
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;