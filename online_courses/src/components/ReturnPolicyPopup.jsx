import React from 'react';
import '../styles/Popup.css'; // Reuse the existing popup CSS

const ReturnPolicyPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>✖</button>
        <h2>Return Policy</h2>
        <p>Since our products are digital downloads, returns are not available for change of mind. However, if you face any technical issues, please contact us.</p>
        <h3>Contact Information</h3>
        <p>
          Email: <a href="mailto:marketingbundle8@gmail.com">marketingbundle8@gmail.com</a><br />
          Phone: +91 9137602811
        </p>
        <h3>Return Eligibility</h3>
        <p>We accept returns only for technical issues. No returns for change of mind or other reasons.</p>
        <h3>How to Request a Return</h3>
        <p>
          If you encounter a technical issue, please email or call us with your order details and a description of the problem. Our support team will assist you promptly.
        </p>
        <h3>Non-Returnable Situations</h3>
        <p>Due to the digital nature of our products, we cannot accept returns for reasons other than technical issues.</p>
      </div>
    </div>
  );
};

export default ReturnPolicyPopup;
