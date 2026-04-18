// src/pages/About.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faLaptop, faAward, faUsers, faGlobe, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600)' }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About <span className="highlight">EduStore</span></h1>
          <p>Empowering students with quality educational resources since 2024</p>
        </div>
      </div>

      <div className="about-content">
        <div className="mission-vision-section">
          <div className="mv-card">
            <div className="mv-icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <h2>Our Mission</h2>
            <p>To provide students and educators with high-quality educational resources and products that enhance learning and academic success.</p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h2>Our Vision</h2>
            <p>To become the leading online platform for educational products, connecting learners with the best resources from top universities worldwide.</p>
          </div>
        </div>

        <div className="offerings-section">
          <h2 className="section-title">What We Offer</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400" alt="Textbooks" />
              </div>
              <div className="card-content">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faBook} />
                </div>
                <h3>Textbooks & Materials</h3>
                <p>Latest editions of textbooks from top publishers</p>
              </div>
            </div>
            <div className="offering-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" alt="Tech" />
              </div>
              <div className="card-content">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faLaptop} />
                </div>
                <h3>Tech & Electronics</h3>
                <p>Laptops, tablets, and accessories for students</p>
              </div>
            </div>
            <div className="offering-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400" alt="Merchandise" />
              </div>
              <div className="card-content">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <h3>University Merchandise</h3>
                <p>Official merchandise from partner universities</p>
              </div>
            </div>
            <div className="offering-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400" alt="Study Aids" />
              </div>
              <div className="card-content">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h3>Study Aids</h3>
                <p>Notes, guides, and practice materials</p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-bg"></div>
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>10,000+</h3>
              <p>Students Served</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h3>500+</h3>
              <p>Universities</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FontAwesomeIcon icon={faBook} />
              </div>
              <h3>50,000+</h3>
              <p>Products Sold</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;