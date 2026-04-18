// src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

const productsData = {
  101: [
    { id: 1001, name: 'Programming Textbook', description: 'Complete guide to programming', price: 49.99, image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400', quantity: 50 },
    { id: 1002, name: 'Laptop Bag', description: 'Premium laptop bag', price: 29.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', quantity: 100 }
  ],
  102: [
    { id: 2001, name: 'Business Management Book', description: 'Essential business strategies', price: 39.99, image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400', quantity: 75 }
  ],
  103: [
    { id: 3001, name: 'Engineering Calculator', description: 'Scientific calculator', price: 89.99, image: 'https://images.unsplash.com/photo-1587145829366-a69be9e8d134?w=400', quantity: 30 }
  ]
};

function Products() {
  const navigate = useNavigate();
  const [department, setDepartment] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const selected = localStorage.getItem('selectedDepartment');
    if (selected) {
      const dept = JSON.parse(selected);
      setDepartment(dept);
      setProducts(productsData[dept.id] || []);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductDetail = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (product) => {
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
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem(cartKey, JSON.stringify(existingCart));
    alert(`${product.name} added to cart!`);
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('cart-update'));
  };

  if (!department) return null;

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>{department.name}</h1>
        <p>Browse our collection of products</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div key={product.id} className="product-card animate-fadeUp" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="card-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="card-content">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>
              <p className="quantity">Stock: {product.quantity} units</p>
              <div className="card-buttons">
                <button className="view-btn" onClick={() => handleProductDetail(product)}>
                  View Details
                </button>
                <button className="add-cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found in this department.</p>
        </div>
      )}
    </div>
  );
}

export default Products;