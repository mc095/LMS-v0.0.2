import React from "react";

const Sidebar = ({ isNavOpen, onCloseSidebar, onLogout, theme }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      } lg:hidden dark:bg-gray-800 z-50`} // Hide on iPad and larger screens
    >
      <div className="p-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          SVEC LMS
        </h1>
        {/* Close Button (Cross Icon) */}
        <button
          onClick={onCloseSidebar}
          className="text-gray-600 focus:outline-none dark:text-gray-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <a
          href="#"
          className="block px-6 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Home
        </a>
        <a
          href="#"
          className="block px-6 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Courses
        </a>
        <a
          href="#"
          className="block px-6 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Assignments
        </a>
        <a
          href="#"
          className="block px-6 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Grades
        </a>
        {/* Logout Button in Sidebar */}
        <button
          onClick={onLogout}
          className="ml-4 mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-sm"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
