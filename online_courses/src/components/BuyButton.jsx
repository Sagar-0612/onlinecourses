// src/components/BuyButton.jsx
import React from 'react';
import '../styles/BuyButton.css';

const BuyButton = ({ onClick }) => {
  return (
    <button className="buy-button" onClick={onClick}>
      Buy @ ₹99
    </button>
  );
};

export default BuyButton;
