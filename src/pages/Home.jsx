// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const universities = [
  { id: 1, name: 'Harvard University', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400', description: 'Ivy League university in Cambridge, Massachusetts' },
  { id: 2, name: 'Stanford University', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400', description: 'Private research university in Stanford, California' },
  { id: 3, name: 'MIT', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400', description: 'World-renowned institute of technology' },
  { id: 4, name: 'Oxford University', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400', description: 'Oldest university in the English-speaking world' },
  { id: 5, name: 'Cambridge University', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400', description: 'Collegiate public research university' },
  { id: 6, name: 'University of Tokyo', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400', description: 'Leading research university in Japan' }
];

const heroImages = [
  'https://images.unsplash.com/photo-1562774053-701939374585?w=1200',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200'
];

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredUniversities, setFilteredUniversities] = useState(universities);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const filtered = universities.filter(uni =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUniversities(filtered);
  }, [searchTerm]);

  const handleViewDepartments = (universityId, universityName) => {
    localStorage.setItem('selectedUniversity', JSON.stringify({ id: universityId, name: universityName }));
    navigate('/departments');
  };

  return (
    <div className="home">
      <div className="hero-section" style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fadeUp">
          <h1>Welcome to <span className="highlight">University Hub</span></h1>
          <p>Your gateway to quality education products and university resources</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Universities</p>
            </div>
            <div className="stat">
              <h3>10K+</h3>
              <p>Products</p>
            </div>
            <div className="stat">
              <h3>50K+</h3>
              <p>Students</p>
            </div>
          </div>
        </div>
      </div>

      <div className="search-section">
        <div className="container">
          <h2>Explore Universities</h2>
          <p>Choose a university to view its departments and products</p>
<div className="search-bar">
  <input
    type="text"
    placeholder="Search University..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <FontAwesomeIcon icon={faSearch} className="search-icon" />
</div>
        </div>
      </div>

      <div className="universities-section">
        <div className="container">
          <div className="universities-grid">
            {filteredUniversities.map((university, index) => (
              <div key={university.id} className="university-card animate-fadeUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-image">
                  <img src={university.image} alt={university.name} />
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{university.name}</h3>
                  <p>{university.description}</p>
                  <button onClick={() => handleViewDepartments(university.id, university.name)}>
                    View Departments →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Why Choose EduStore?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎓</div>
              <h3>Quality Education</h3>
              <p>Premium quality products from top universities</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick shipping across all locations</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive prices with student discounts</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Payment</h3>
              <p>100% secure payment gateway</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;