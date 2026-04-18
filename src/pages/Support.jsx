// src/pages/Support.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelope, faPhone, faHeadset, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Support.css';

function Support() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Click on the "Register" button in the top right corner, fill in your details, and submit the form.',
      icon: faHeadset
    },
    {
      question: 'How can I reset my password?',
      answer: 'Go to the login page and click on "Forgot Password". Follow the instructions to reset your password.',
      icon: faHeadset
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers.',
      icon: faHeadset
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.',
      icon: faHeadset
    },
    {
      question: 'Can I return a product?',
      answer: 'Yes, we have a 30-day return policy. Products must be unused and in original packaging.',
      icon: faHeadset
    }
  ];

  return (
    <div className="support-page">
      <div className="support-hero">
        <div className="hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600)' }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Support <span className="highlight">Center</span></h1>
          <p>How can we help you today?</p>
        </div>
      </div>

      <div className="support-container">
        <div className="faq-section">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <div className="question-content">
                    <div className="question-icon">
                      <FontAwesomeIcon icon={faq.icon} />
                    </div>
                    <h3>{faq.question}</h3>
                  </div>
                  <span className="faq-icon">
                    {activeFaq === index ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                  </span>
                </div>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="contact-support">
          <div className="section-header">
            <h2>Still Need Help?</h2>
            <p>Our support team is available 24/7 to assist you</p>
          </div>
          <div className="support-options">
            <div className="support-option">
              <div className="option-image">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400" alt="Live Chat" />
              </div>
              <div className="option-content">
                <div className="option-icon">
                  <FontAwesomeIcon icon={faComments} />
                </div>
                <h3>Live Chat</h3>
                <p>Chat with our support team</p>
                <button>Start Chat</button>
              </div>
            </div>
            <div className="support-option">
              <div className="option-image">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400" alt="Email" />
              </div>
              <div className="option-content">
                <div className="option-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h3>Email Support</h3>
                <p>abhishekrana23da@gmail.com</p>
                <button>Send Email</button>
              </div>
            </div>
            <div className="support-option">
              <div className="option-image">
                <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400" alt="Phone" />
              </div>
              <div className="option-content">
                <div className="option-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <h3>Phone Support</h3>
                <p>+91 86792-01047</p>
                <button>Call Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;