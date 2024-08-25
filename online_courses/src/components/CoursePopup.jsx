import React from 'react';
import '../styles/CoursePopup.css';

const CoursePopup = ({ isOpen, onClose, course, isBonus }) => {
  if (!isOpen || !course) return null;

  return (
    <div className={`course-popup ${isBonus ? 'bonus-course' : ''}`}>
      <div className={`course-popup-content ${isBonus ? 'bonus-course-content' : ''}`}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className={isBonus ? 'bonus-title' : ''}>{course.title}</h2>
        {/* <img src={course.image} alt={course.title} className="course-popup-image" /> */}
        <div className="course-popup-details">
          <h3>Course Details:</h3>
          <ul>
            {course.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
