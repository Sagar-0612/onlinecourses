import React, { useState, useEffect } from 'react';
import BuyButton from './BuyButton';
import EmailPopup from './EmailPopup';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';
import TermsAndConditionsPopup from './TermsAndConditionsPopup';
import '../styles/LandingPage.css';
import generateUniqueTestimonials from '../utils/generateUniqueTestimonials';

// Testimonial data
const testimonials = generateUniqueTestimonials(50);

const courses = [
  { title: 'LinkedIn Marketing', image: '/images/linkedin-marketing.jpg' },
  { title: 'Affiliate Marketing', image: '/images/affiliate-marketing.jpg' },
  { title: 'Amazon FBA', image: '/images/amazon-fba.jpg' },
  { title: 'Copywriting Skills', image: '/images/copywriting-skills.jpg' },
  { title: 'Cryptocurrency', image: '/images/cryptocurrency.jpg' },
  { title: 'Dropshipping', image: '/images/dropshipping.jpg' },
  { title: 'eCommerce Strategies', image: '/images/ecommerce-strategies.jpg' },
  { title: 'eBooks and More', image: '/images/ebooks.jpg' },
  { title: 'Email Marketing', image: '/images/email-marketing.jpg' },
  { title: 'Facebook Advertising', image: '/images/facebook-advertising.jpg' },
  // Add more courses with their respective images
];

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const deadline = new Date(Math.ceil(now.getTime() / (24 * 60 * 60 * 1000)) * 24 * 60 * 60 * 1000); // Reset to next 24-hour mark
      const timeDifference = deadline - now;

      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    };

    calculateTimeRemaining();
    const timerInterval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    const showSlider = () => {
      setIsSliderVisible(true);
      setTimeout(() => {
        setIsSliderVisible(false);
      }, 2000); // Show slider for 2 seconds
    };

    const changeTestimonial = () => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    showSlider(); // Show the first testimonial immediately

    const interval = setInterval(() => {
      showSlider();
      setTimeout(() => {
        changeTestimonial();
        showSlider(); // Show the next testimonial
      }, 2000); // Change testimonial after 2 seconds of showing the slider
    }, 8000); // Change testimonial every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <section className="transformation">
        <h2>🚀 Transform Your Life with Our Exclusive Courses! 🚀</h2>
        <p>Feeling stuck in a rut? Struggling to make ends meet? It’s time for a change. Our comprehensive courses are designed to help you:</p>
        <ul>
          <li>💼 Unlock lucrative career opportunities.</li>
          <li>📈 Boost your income potential with proven strategies.</li>
          <li>🌟 Achieve financial freedom and live the life you’ve always dreamed of.</li>
        </ul>
        <p>For just <span className="price-highlight">₹99</span>, you can gain access to a world of knowledge and start your journey towards success. Don’t wait – your future is in your hands!</p>
        <p className="price-strike">Original Price: ₹999</p>
        <BuyButton onClick={() => setShowPopup(true)} />
      </section>

      <header>
        <h1>Unlock Your Potential with Our Exclusive Courses!</h1>
        <p>Don’t miss out on this Limited-Time Offer. Enhance your skills with our comprehensive courses at a special price!</p>
      </header>

      <section className="offer">
        <h2>⚡ Limited Time Offer ⚡</h2>
        <p>Get access to over 20 top-rated courses for just <span className="price-highlight">₹99</span>! This deal expires soon!</p>
        <p className="price-strike">Original Price: ₹999</p>
        <div className="countdown-timer">
          <div className="timer-part">{timerHours}h</div>
          <div className="timer-part">{timerMinutes}m</div>
          <div className="timer-part">{timerSeconds}s</div>
        </div>
        <BuyButton onClick={() => setShowPopup(true)} />
      </section>

      <section className="courses">
        <h2>What You'll Get:</h2>
        <div className="course-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-image" />
              <h3 className="course-title">{course.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="final-call-to-action">
        <h2>🌟 Don’t Let This Opportunity Slip Away! 🌟</h2>
        <p>Your chance to transform your life is just a click away. Imagine a future where you have the skills and knowledge to:</p>
        <ul>
          <li>💰 Generate a steady stream of income.</li>
          <li>🚀 Launch successful ventures and achieve your dreams.</li>
          <li>🌍 Enjoy a life of freedom and flexibility.</li>
        </ul>
        <p>Act now and secure your access to our complete course library for only <span className="price-highlight">₹99</span>. This exclusive offer won't last long – make the decision to invest in your future today!</p>
        <p className="price-strike">Original Price: ₹999</p>
        <BuyButton onClick={() => setShowPopup(true)} />
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        <p><a href="#privacy" onClick={() => setShowPrivacyPolicy(true)}>Privacy Policy</a> | <a href="#terms" onClick={() => setShowTerms(true)}>Terms and Conditions</a></p>
        <p>Support: <a href="mailto:marketingbundle8@gmail.com">marketingbundle8@gmail.com</a></p>
      </footer>

      {showPopup && <EmailPopup onClose={() => setShowPopup(false)} />}
      {showPrivacyPolicy && <PrivacyPolicyPopup onClose={() => setShowPrivacyPolicy(false)} />}
      {showTerms && <TermsAndConditionsPopup onClose={() => setShowTerms(false)} />}

      {/* Testimonial Slider */}
      <div className={`testimonial-slider ${isSliderVisible ? 'visible' : ''}`}>
        <div className="testimonial-content">
          <div className="testimonial-username">{testimonials[currentTestimonialIndex].username}</div>
          <div className="testimonial-comment">{testimonials[currentTestimonialIndex].comment}</div>
          <div className="testimonial-rating">{'⭐'.repeat(testimonials[currentTestimonialIndex].rating)}</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
