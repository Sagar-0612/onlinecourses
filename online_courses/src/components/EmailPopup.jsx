import React, { useState } from 'react';
import { handleRazorpayPayment } from '../utils/payment';
import { sendEmail } from '../utils/emailService';
import CustomNotification from './CustomNotification';
import '../styles/EmailPopup.css';

const EmailPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState(null);

  const handlePayment = () => {
    if (email.trim()) { // Check for non-empty email
      handleRazorpayPayment(email, () => {
        sendEmail(email).then(() => {
          setNotification({ message: 'Payment successful! Check your email for course access.', type: 'success' });
          onClose();
        }).catch(() => {
          setNotification({ message: 'Failed to send email. Please try again.', type: 'error' });
        });
      });
    } else {
      setNotification({ message: 'Please enter a valid email.', type: 'error' });
    }
  };

  return (
    <div className="email-popup">
      <div className="popup-content">
        <h2>Unlock Exclusive Content!</h2>
        <p>Enter your email to proceed with the payment and get instant access to our premium course.</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button onClick={handlePayment} className="pay-button">Proceed to Pay</button>
        <button onClick={onClose} className="cancel-button">Cancel</button>
      </div>
      {notification && <CustomNotification message={notification.message} />}
    </div>
  );
};

export default EmailPopup;
