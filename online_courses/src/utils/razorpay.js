export const loadRazorpay = (courseTitle, amount, courseLink) => {

  
    const options = {
      key: 'OmiP52K7rcgHou', // Replace with your Razorpay key
      amount: amount * 100,
      currency: 'INR',
      name: 'Your Course Name',
      description: courseTitle,
      image: '/your_logo.png',
      handler: function (response) {
        alert('Payment successful');
        window.location.href = courseLink;
      },
      prefill: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  }
  