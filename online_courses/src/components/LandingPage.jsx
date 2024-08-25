import React, { useState, useEffect } from 'react';
import BuyButton from './BuyButton';
import EmailPopup from './EmailPopup';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';
import TermsAndConditionsPopup from './TermsAndConditionsPopup';
import '../styles/LandingPage.css';
import generateUniqueTestimonials from '../utils/generateUniqueTestimonials';
import ReturnPolicyPopup from './ReturnPolicyPopup';
import CoursePopup from './CoursePopup';

// Testimonial data
const testimonials = generateUniqueTestimonials(50);

const courses = [
  { title: 'LinkedIn Marketing', image: '/images/linkedin-marketing.jpg', details: ['LinkedIn Introduction', 'Profile Optimization', 'LinkedIn Groups & Events', 'How to Download LinkedIn Connections', 'Your LinkedIn Presence', 'Craft an Offer', 'Establish Your Goals', 'Build Network', 'First 500 Connections', 'Profile Quick Tip', 'AFR (Taking Permission)', 'Retargeting - Profile Views', 'LM Content Retargeting', 'LinkedIn Lead Generation'] },
  { title: 'Affiliate Marketing', image: '/images/affiliate-marketing.jpg', details: ['Introduction to Affiliate Marketing', 'Choosing the Right Affiliate Programs', 'Building an Affiliate Website', 'Traffic Generation Techniques', 'Converting Traffic into Sales', 'Tracking and Analytics', 'Scaling Your Affiliate Business'] },
  { title: 'Amazon FBA', image: '/images/amazon-fba.jpg', details: ['Amazon FBA Overview', 'Product Research', 'Sourcing and Suppliers', 'Listing Optimization', 'Marketing and Promotions', 'Managing Inventory', 'Analyzing Performance'] },
  { title: 'Copywriting Skills', image: '/images/copywriting-skills.jpg', details: ['Understanding Copywriting', 'Crafting Compelling Headlines', 'Writing Persuasive Content', 'Using Emotional Triggers', 'Call-to-Action Strategies', 'Editing and Proofreading', 'A/B Testing'] },
  { title: 'Cryptocurrency', image: '/images/cryptocurrency.jpg', details: ['Introduction to Cryptocurrency', 'How Cryptocurrencies Work', 'Buying and Selling Cryptocurrencies', 'Trading Strategies', 'Security and Wallets', 'Mining and Staking', 'Regulations and Taxation'] },
  { title: 'Dropshipping', image: '/images/dropshipping.jpg', details: ['Dropshipping Basics', 'Finding Suppliers', 'Setting Up Your Store', 'Product Listings and Pricing', 'Marketing Strategies', 'Order Fulfillment', 'Customer Service'] },
  { title: 'eCommerce Strategies', image: '/images/ecommerce-strategies.jpg', details: ['Building an eCommerce Store', 'Product Selection', 'Website Optimization', 'Digital Marketing Techniques', 'Customer Retention', 'Sales Analytics', 'Scaling Your Store'] },
  { title: 'eBooks and More', image: '/images/ebooks.jpg', details: ['Creating eBooks', 'Publishing Platforms', 'Marketing Your eBook', 'Monetization Strategies', 'Building an Author Platform', 'eBook Design and Formatting', 'Distribution Channels'] },
  { title: 'Email Marketing', image: '/images/email-marketing.jpg', details: ['Email Marketing Basics', 'Building an Email List', 'Crafting Effective Campaigns', 'Segmentation and Personalization', 'Automation Strategies', 'A/B Testing Emails', 'Analytics and Reporting'] },
  { title: 'Facebook Advertising', image: '/images/facebook-advertising.jpg', details: ['Creating Facebook Ads', 'Targeting Your Audience', 'Ad Formats and Placement', 'Budgeting and Bidding', 'Ad Performance Metrics', 'Retargeting Strategies', 'Campaign Optimization'] },
  { title: 'Funnel Building', image: '/images/funnel-building.jpg', details: ['Understanding Sales Funnels', 'Creating Effective Funnels', 'Funnel Stages and Strategies', 'Optimizing Funnel Performance', 'A/B Testing Funnels', 'Funnels for Different Business Models', 'Using Funnel Tools'] },
  { title: 'Google AdWords', image: '/images/google-adwords.jpg', details: ['Google Ads Overview', 'Keyword Research', 'Creating Campaigns', 'Ad Copy and Design', 'Bid Strategies', 'Performance Tracking', 'Ad Extensions'] },
  { title: 'Instagram Marketing', image: '/images/instagram-marketing.jpg', details: ['Instagram Basics', 'Building a Strong Profile', 'Creating Engaging Content', 'Hashtag Strategies', 'Influencer Collaborations', 'Instagram Ads', 'Analyzing Performance'] },
  { title: 'Lifestyle & Self Exploration', image: '/images/lifestyle-self-exploration.jpg', details: ['Self-Discovery Techniques', 'Setting Personal Goals', 'Mindfulness and Wellness', 'Building Confidence', 'Exploring New Hobbies', 'Creating a Balanced Life', 'Continuous Self-Improvement'] },
  { title: 'Messenger Bot Building', image: '/images/messenger-bot-building.jpg', details: ['Introduction to Messenger Bots', 'Building Your First Bot', 'Bot Design and Flow', 'Integrating with Facebook', 'Automating Responses', 'Tracking and Analytics', 'Advanced Bot Features'] },
  { title: 'Personal Brand Building', image: '/images/personal-brand-building.jpg', details: ['Understanding Personal Branding', 'Building Your Online Presence', 'Creating Valuable Content', 'Networking Strategies', 'Leveraging Social Media', 'Brand Messaging', 'Brand Consistency'] },
  { title: 'SEO Courses', image: '/images/seo-courses.jpg', details: ['SEO Fundamentals', 'Keyword Research Techniques', 'On-Page Optimization', 'Technical SEO', 'Link Building Strategies', 'SEO Tools and Analytics', 'Local SEO'] },
  { title: 'Social Media Marketing', image: '/images/social-media-marketing.jpg', details: ['Overview of Social Media Platforms', 'Creating Social Media Strategies', 'Content Planning and Creation', 'Social Media Advertising', 'Engagement and Interaction', 'Analyzing Social Media Performance', 'Managing Social Media Accounts'] },
  { title: 'Blogging Course in Hindi', image: '/images/blogging-course-hindi.jpg', details: ['Blogging Basics', 'Content Creation and Strategy', 'SEO for Blogs', 'Monetizing Your Blog', 'Promoting Your Blog', 'Building an Audience', 'Blog Maintenance'] },
  { title: 'Grow Your Blog Fast', image: '/images/grow-your-blog-fast.jpg', details: ['Fast Blog Growth Strategies', 'Content Planning', 'SEO Techniques', 'Promotional Tactics', 'Building Backlinks', 'Engaging with Your Audience', 'Analyzing Growth'] },
  { title: 'SEO That Works 3.0', image: '/images/seo-that-works-3-0.jpg', details: ['Advanced SEO Techniques', 'Keyword Research and Optimization', 'On-Page and Off-Page SEO', 'Technical SEO', 'Local and Global SEO', 'SEO Tools and Analytics', 'Continuous Improvement'] },
  { title: 'Zapier Mastery', image: '/images/zapier-mastery.jpg', details: ['Introduction to Zapier', 'Creating Automated Workflows', 'Connecting Apps and Services', 'Advanced Zapier Features', 'Troubleshooting Zaps', 'Optimizing Automation', 'Use Cases and Examples'] },
  { title: 'Sales Funnel That Works', image: '/images/sales-funnel-that-works.jpg', details: ['Sales Funnel Design', 'Lead Generation Strategies', 'Nurturing Leads', 'Conversion Optimization', 'Analyzing Funnel Performance', 'Scaling Funnels', 'Case Studies'] },
  { title: 'Graphic Design', image: '/images/graphic-design.jpg', details: ['Graphic Design Basics', 'Design Principles', 'Using Design Software', 'Creating Visual Content', 'Typography and Color Theory', 'Designing for Different Media', 'Building a Portfolio'] },
  { title: 'Words That Sell', image: '/images/words-that-sell.jpg', details: ['Copywriting Essentials', 'Crafting Persuasive Copy', 'Using Emotional Triggers', 'Call-to-Action Techniques', 'Editing and Proofreading', 'A/B Testing Copy', 'Creating Engaging Headlines'] },
  { title: 'Millionaire Blogging Guide', image: '/images/millionaire-blogging-guide.jpg', details: ['Building a Million-Dollar Blog', 'Content Creation Strategies', 'Monetization Techniques', 'Marketing and Promotion', 'Audience Building', 'Scaling Your Blog', 'Success Stories'] },
  { title: 'Udemy SEO 2020 Complete SEO Training', image: '/images/udemy-seo-2020.jpg', details: ['Comprehensive SEO Training', 'Keyword Research', 'On-Page and Off-Page SEO', 'Technical SEO', 'SEO Tools and Analytics', 'Case Studies', 'SEO Trends and Updates'] },
  { title: 'SEO for WordPress Websites 2020', image: '/images/seo-for-wordpress-websites-2020.jpg', details: ['SEO for WordPress', 'Setting Up SEO Plugins', 'On-Page Optimization', 'Content Creation', 'Technical SEO for WordPress', 'Building Backlinks', 'Tracking Performance'] },
  { title: 'CA Rachna Ranade Bonus Course', image: '/images/ca-rachn-ranade-bonus.jpg', details: ['Bonus Content from CA Rachna Ranade', 'Advanced Financial Topics', 'Investing Strategies', 'Tax Planning', 'Wealth Management', 'Financial Independence', 'Practical Exercises'] }
];


const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showReturnPolicy, setShowReturnPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [showCoursePopup, setShowCoursePopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowCoursePopup(true);
  };

  const handleCloseCoursePopup = () => setShowCoursePopup(false);

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

      <section className="courses-section">
  <h2>What you will get </h2>
  <div className="course-grid">
    {courses.map((course, index) => (
      <div
        key={index}
        className={`course-card ${course.title === 'CA Rachna Ranade Bonus Course' ? 'bonus-course' : ''}`}
        onClick={() => handleCourseClick(course)}
      >
        {course.title === 'CA Rachna Ranade Bonus Course' && (
          <div className="bonus-tag">BONUS</div>
        )}
        {/* <img src={course.image} alt={course.title} className="course-image" /> */}
        <h3>{course.title}</h3>
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
        <p>&copy; 2024 Marketing Bundle. All rights reserved.</p>
        <p><a href="#privacy" onClick={() => setShowPrivacyPolicy(true)}>Privacy Policy</a> 
        | <a href="#terms" onClick={() => setShowTerms(true)}>Terms and Conditions</a>
        | <a href="#return-policy" onClick={() => setShowReturnPolicy(true)}>Return Policy</a>

        </p>

        <p>Support: <a href="mailto:marketingbundle8@gmail.com">marketingbundle8@gmail.com</a></p>
      </footer>

      {showPopup && <EmailPopup onClose={() => setShowPopup(false)} />}
      {showPrivacyPolicy && <PrivacyPolicyPopup onClose={() => setShowPrivacyPolicy(false)} />}
      {showTerms && <TermsAndConditionsPopup onClose={() => setShowTerms(false)} />}
      {showReturnPolicy && <ReturnPolicyPopup onClose={() => setShowReturnPolicy(false)} />} 
      {showCoursePopup && selectedCourse && (
        <CoursePopup
          isOpen={showCoursePopup}
          onClose={handleCloseCoursePopup}
          course={selectedCourse}
        />
      )}

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
