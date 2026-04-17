// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find(u => u.email === email);
    
    if (!userExists) {
      setError('Email not registered');
      return;
    }
    
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    alert(`Your OTP is: ${newOtp}`);
    setStep(2);
    setError('');
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setStep(3);
      setError('');
    } else {
      setError('Invalid OTP');
    }
  };

  const handleResetPassword = () => {
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => u.email === email ? { ...u, password: newPassword } : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setSuccess('Password reset successful! Redirecting to login...');
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card animate-fadeUp">
        <div className="forgot-header">
          <div className="forgot-icon">🔐</div>
          <h2>Reset Password</h2>
          <p>We'll help you get back to your account</p>
        </div>

        {success && <div className="success-message">{success}</div>}
        {error && <div className="error-message">{error}</div>}

        {step === 1 && (
          <div className="forgot-form">
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
              />
            </div>
            <button onClick={handleSendOtp} className="forgot-btn">Send OTP</button>
            <Link to="/login" className="back-link">Back to Login</Link>
          </div>
        )}

        {step === 2 && (
          <div className="forgot-form">
            <div className="input-group">
              <label>Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit OTP"
                maxLength="6"
              />
            </div>
            <button onClick={handleVerifyOtp} className="forgot-btn">Verify OTP</button>
          </div>
        )}

        {step === 3 && (
          <div className="forgot-form">
            <div className="input-group">
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Min 6 characters"
              />
            </div>
            <button onClick={handleResetPassword} className="forgot-btn">Reset Password</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;