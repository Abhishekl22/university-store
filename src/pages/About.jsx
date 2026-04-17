// src/pages/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About EduStore</h1>
        <p>Your trusted partner in educational excellence</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>To provide students and educators with high-quality educational resources and products that enhance learning and academic success.</p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>To become the leading online platform for educational products, connecting learners with the best resources from top universities worldwide.</p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <div className="offerings">
            <div className="offering">
              <h3>📚 Textbooks & Course Materials</h3>
              <p>Latest editions of textbooks from top publishers</p>
            </div>
            <div className="offering">
              <h3>💻 Tech & Electronics</h3>
              <p>Laptops, tablets, and accessories for students</p>
            </div>
            <div className="offering">
              <h3>🎓 University Merchandise</h3>
              <p>Official merchandise from partner universities</p>
            </div>
            <div className="offering">
              <h3>📝 Study Aids</h3>
              <p>Notes, guides, and practice materials</p>
            </div>
          </div>
        </div>

        <div className="about-section stats">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>10,000+</h3>
              <p>Students Served</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Universities</p>
            </div>
            <div className="stat">
              <h3>50,000+</h3>
              <p>Products Sold</p>
            </div>
            <div className="stat">
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