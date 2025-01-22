// src/components/CourseCard.jsx
import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:transform hover:translate-y-2 transition-all duration-300">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {course.title}
        </h4>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {course.description}
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{course.duration}</span> • <span>{course.lessons} Lessons</span>
        </div>
        <button className="mt-4 w-full bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition duration-200">
          Start Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
