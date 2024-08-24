// src/utils/payment.js
import { RAZORPAY_KEY } from '../config';

export const handleRazorpayPayment = (email, onSuccess) => {
  const options = {
    key: "rzp_test_qF7D5e2UXnX16J",
    amount: 9900, // Amount in paise (₹99)
    currency: 'INR',
    name: 'MarketingBundle',
    description: 'Access all premium courses',
    handler: function (response) {
      console.log(response);
      onSuccess(); 
    },
    prefill: {
      email: email,
    },
    theme: {
      color: '#ff8a00',
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
