// src/components/CourseCarousel.jsx
import React from 'react';
import '../styles/CourseCarousel.css'; // Ensure this is in the same file

const CourseCarousel = ({ courses }) => {
  return (
    <div className="course-container">
      <h2 className="section-title">Our Popular Courses</h2>
      <div className="course-cards">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-details">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">
                Discover this in-depth course and gain valuable knowledge on {course.title}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCarousel;
