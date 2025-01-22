// src/components/CoursesSection.jsx
import React from "react";
import CourseCard from "./CourseCard";

const CoursesSection = ({ courses }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;