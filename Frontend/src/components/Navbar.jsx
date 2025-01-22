import React, { useState } from "react";

const Navbar = ({ onToggleSidebar, onLogout, onToggleTheme, theme, searchQuery, onSearchChange }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-900 w-full">
      <div className="px-6 py-4 flex items-center justify-between w-full">
        {/* SVEC LMS Logo and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            SVEC LMS
          </h1>
        </div>

        {/* Nav Links (Hidden on Mobile and iPad) */}
        <div className="hidden lg:flex space-x-8 items-center">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
          >
            Assignments
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
          >
            Grades
          </a>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (Hidden on Mobile and iPad) */}
          <div className="hidden lg:flex flex-1 mx-4 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery} // Bind the value to the searchQuery state
              onChange={onSearchChange} // Call onSearchChange when the value changes
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Search Icon (Visible on Mobile and iPad) */}
          <button
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            className="lg:hidden text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>

          {/* Toggle Dark Mode */}
          <button
            onClick={onToggleTheme}
            className="text-gray-600 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>

          {/* Logout Button (Hidden on Mobile and iPad) */}
          <button
            onClick={onLogout}
            className="hidden lg:block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200 ml-4"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Search Bar (Visible on Mobile and iPad when toggled) */}
      {isSearchVisible && (
        <div className="lg:hidden px-6 py-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery} // Bind the value to the searchQuery state
            onChange={onSearchChange} // Call onSearchChange when the value changes
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
