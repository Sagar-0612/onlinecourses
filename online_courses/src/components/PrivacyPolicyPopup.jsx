import React from 'react';
import '../styles//Popup.css'; // Import your popup CSS

const PrivacyPolicyPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>✖</button>
        <h2>Privacy Policy</h2>
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        <h3>1. Information Collection</h3>
        <p>We collect information you provide directly to us, such as your name and email address, when you sign up for our courses.</p>
        <h3>2. Use of Information</h3>
        <p>We use your information to process transactions, improve our services, and communicate with you about updates and offers.</p>
        <h3>3. Data Security</h3>
        <p>We implement reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>
        <h3>4. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:marketingbundle8@gmail.com">marketingbundle8@gmail.com</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopup;
