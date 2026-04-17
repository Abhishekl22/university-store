// src/pages/Support.jsx
import React, { useState } from 'react';
import './Support.css';

function Support() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Click on the "Register" button in the top right corner, fill in your details, and submit the form.'
    },
    {
      question: 'How can I reset my password?',
      answer: 'Go to the login page and click on "Forgot Password". Follow the instructions to reset your password.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.'
    },
    {
      question: 'Can I return a product?',
      answer: 'Yes, we have a 30-day return policy. Products must be unused and in original packaging.'
    }
  ];

  return (
    <div className="support-page">
      <div className="support-header">
        <h1>Support Center</h1>
        <p>How can we help you today?</p>
      </div>

      <div className="support-container">
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
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
          <h2>Still Need Help?</h2>
          <p>Our support team is available 24/7 to assist you</p>
          <div className="support-options">
            <div className="support-option">
              <span className="icon">💬</span>
              <h3>Live Chat</h3>
              <p>Chat with our support team</p>
              <button>Start Chat</button>
            </div>
            <div className="support-option">
              <span className="icon">📧</span>
              <h3>Email Support</h3>
              <p>support@edustore.com</p>
              <button>Send Email</button>
            </div>
            <div className="support-option">
              <span className="icon">📞</span>
              <h3>Phone Support</h3>
              <p>+1 (555) 123-4567</p>
              <button>Call Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;