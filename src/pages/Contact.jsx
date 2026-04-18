// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600)' }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Get in <span className="highlight">Touch</span></h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-header">
            <h2>Contact Information</h2>
            <p>Reach out to us through any of these channels</p>
          </div>
          <div className="info-cards">
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="card-content">
                <h3>Address</h3>
                <p>Chandigarh, India</p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="card-content">
                <h3>Phone</h3>
                <p>+91 86792-01047</p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="card-content">
                <h3>Email</h3>
                <p>abhishekrana23da@gmail.com</p>
              </div>
            </div>
            <div className="info-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="card-content">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="map-image">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600" alt="Map" />
          </div>
        </div>

        <div className="contact-form">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you</p>
          </div>
          {submitted && <div className="success-message"><FontAwesomeIcon icon={faPaperPlane} /> Message sent successfully!</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <FontAwesomeIcon icon={faPaperPlane} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;