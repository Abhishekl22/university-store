// src/pages/ChangePassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChangePassword.css';

function ChangePassword({ currentUser }) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }
    
    setIsLoading(true);
    
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex(u => u.email === currentUser.email);
      
      if (userIndex === -1) {
        setError('User not found');
        setIsLoading(false);
        return;
      }
      
      if (users[userIndex].password !== oldPassword) {
        setError('Current password is incorrect');
        setIsLoading(false);
        return;
      }
      
      users[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      
      setSuccess('Password changed successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1500);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="change-password-container">
      <div className="change-password-card animate-fadeUp">
        <div className="change-password-header">
          <div className="change-password-icon">🔒</div>
          <h2>Change Password</h2>
          <p>Update your account password</p>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Current Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter current password"
              required
            />
          </div>

          <div className="input-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Min 6 characters"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>

          <button type="submit" className="change-password-btn" disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;