import React from 'react';
import '../styles/Popup.css'; // Import your popup CSS

const TermsAndConditionsPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>✖</button>
        <h2>Terms and Conditions</h2>
        <p>Welcome to our website! By accessing or using our site, you agree to be bound by the following terms and conditions.</p>
        <h3>1. Use of Site</h3>
        <p>You agree to use our website for lawful purposes and not to engage in any activity that disrupts or interferes with the site.</p>
        <h3>2. Intellectual Property</h3>
        <p>All content on our site is the property of our company and may not be used or reproduced without permission.</p>
        <h3>3. Limitation of Liability</h3>
        <p>We are not liable for any damages arising from the use of our site or the content contained therein.</p>
        <h3>4. Changes to Terms</h3>
        <p>We reserve the right to update these terms and conditions at any time. Your continued use of the site constitutes acceptance of any changes.</p>
        <h3>5. Contact Us</h3>
        <p>If you have any questions about these terms, please contact us at <a href="mailto:marketingbundle8@gmail.com">marketingbundle8@gmail.com</a>.</p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPopup;
