import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login"; // Assuming you have a Login component

const App = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to "light"
    return localStorage.getItem("theme") || "light";
  });

  // Apply the theme globally using the `dark` class on `document.documentElement`
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme); // Persist theme in localStorage
  }, [theme]);

  // Toggle theme between "light" and "dark"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <Routes>
        {/* Pass theme and toggleTheme as props to child components */}
        <Route
          path="/"
          element={<Login theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/HomePage"
          element={<HomePage theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
