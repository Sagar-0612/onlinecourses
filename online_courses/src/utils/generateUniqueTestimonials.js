const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const names = [
  "Rohan Sharma", "Priya Gupta", "Arjun Patel", "Sakshi Verma",
  "Ananya Singh", "Ravi Kumar", "Maya Patel", "Amit Sharma",
  "Ishita Sharma", "Rajesh Kumar", "Neha Agarwal", "Vikram Singh",
  "Riya Jain", "Aarav Mehta", "Sonia Yadav", "Karan Sharma",
  "Tanya Kapoor", "Aditya Jain", "Pooja Bansal", "Aman Verma",
  "Jaya Sharma", "Amit Kumar", "Sneha Patel", "Rohit Agarwal",
  "Mitali Singh", "Nitin Gupta", "Ruchita Verma", "Gaurav Mehta",
  "Rashmi Singh", "Manoj Kumar", "Ritu Sharma", "Deepak Patel",
  "Shreya Gupta", "Siddharth Verma", "Neeraj Sharma", "Tanvi Patel",
  "Aishwarya Bansal", "Rakesh Singh", "Simran Yadav", "Vikas Agarwal",
  "Ankit Kumar", "Nisha Verma", "Kunal Patel", "Pankaj Sharma",
  "Kirti Gupta", "Arun Mehta", "Payal Jain", "Umesh Kumar",
  "Swati Yadav", "Rajeev Sharma", "Neelam Patel", "Harsh Verma",
  // Add more names if needed
];

const comments = [
  "Amazing product! Highly recommended.",
  "It was good, but could be better.",
  "Absolutely worth the price!",
  "Fantastic experience, great value!",
  "Exceeded my expectations!",
  "Not as good as I hoped.",
  "Great value for money.",
  "I will definitely recommend it.",
  "Very satisfied with the purchase.",
  "Could use some improvements.",
  "Best purchase I've made this year.",
  "Really worth the investment.",
  "The quality was top-notch.",
  "Great service and support.",
  "A bit pricey but worth it.",
  "I’m very happy with the result.",
  "An excellent product overall.",
  "I would buy it again.",
  "It met all my expectations.",
  "The product is really good.",
  "I am pleased with the outcome.",
  "The experience was fantastic.",
  "Good product but needs tweaks.",
  "The best in its category.",
  "I’m impressed with the features.",
  "A solid product for the price.",
  "Fantastic value for money.",
  "I would highly recommend it.",
  "The product is worth every penny.",
  "Excellent quality and service.",
  "I’ve had a great experience.",
  "Very happy with the purchase.",
  "It’s worth the investment.",
  "Good quality and fast delivery.",
  "The support was really helpful.",
  "Satisfying product experience.",
  "Exceeded my expectations in every way.",
  "A reliable choice for the price.",
  "The product works as advertised.",
  "Great experience overall.",
  "I am delighted with the purchase.",
  "Good value for money.",
  "I’ve had no issues with it.",
  "It’s exactly what I needed.",
  "Highly satisfied with the product.",
  "A worthwhile investment.",
  "The product is very durable.",
  "I am extremely pleased with it.",
  // Add more comments if needed
];

const generateUniqueTestimonials = (num) => {
  const testimonials = [];
  const usedIndexes = new Set();

  while (testimonials.length < num) {
    const randomNameIndex = Math.floor(Math.random() * names.length);
    const randomCommentIndex = Math.floor(Math.random() * comments.length);

    if (!usedIndexes.has(randomNameIndex)) {
      usedIndexes.add(randomNameIndex);
      const username = names[randomNameIndex];
      const comment = getRandomElement(comments);
      const rating = Math.floor(Math.random() * 3) + 3; // Ratings between 3 and 5

      testimonials.push({ username, comment, rating });
    }
  }

  return testimonials;
};

export default generateUniqueTestimonials;
