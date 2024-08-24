import React, { useState, useEffect } from 'react';
import '../styles/CustomNotification.css'; // Create a CSS file for styling

const CustomNotification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 3000); // Notification will disappear after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="custom-notification">
      {message}
    </div>
  );
};

export default CustomNotification;
