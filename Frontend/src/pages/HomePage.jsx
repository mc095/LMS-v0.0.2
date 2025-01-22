import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  Suspense,
} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import branchesData from "../data/branches.json";
import coursesData from "../data/courses.json";
import LazyLoad from "react-lazyload";

const LazyCourseCard = React.lazy(() => import("../components/CourseCard"));

const HomePage = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [userRollNumber, setUserRollNumber] = useState("");

  // Check authentication and fetch roll number
  useEffect(() => {
    const token = localStorage.getItem("token");
    const rollNumber = localStorage.getItem("rollNumber");

    if (!token) {
      navigate("/");
    } else {
      setUserRollNumber(rollNumber);
    }
  }, [navigate]);

  // Fetch course data (simulated API call)
  const fetchCourses = useCallback(async () => {
    try {
      setCourses(coursesData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Memoize filtered courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [courses, searchQuery]);

  // Handle logout
  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("rollNumber");
    navigate("/");
  }, [navigate]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }, [theme]);

  // Handle search input change
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // Handle branch selection change
  const handleBranchChange = useCallback((e) => {
    setSelectedBranch(e.target.value);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 font-poppins`}
    >
      {/* Top Navbar */}
      <Navbar
        onToggleSidebar={() => setIsNavOpen(!isNavOpen)}
        onLogout={handleLogout}
        onToggleTheme={toggleTheme}
        theme={theme}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />

      {/* Responsive Sidebar (Mobile) */}
      <Sidebar
        isNavOpen={isNavOpen}
        onCloseSidebar={() => setIsNavOpen(false)}
        onLogout={handleLogout}
        theme={theme}
      />

      {/* Hero Banner */}
      <div
        className="relative w-full h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://wallpapercave.com/wp/wp4697689.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-left px-8 sm:px-12 lg:px-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome, {userRollNumber}
          </h1>
          <p className="text-xl text-gray-200">
            Explore top courses and elevate your skills. Choose from various
            branches and find the perfect fit for your learning journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        {/* Branches Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Top Branches
          </h2>

          {/* Dropdown for Mobile */}
          <div className="block md:hidden">
            <select
              value={selectedBranch}
              onChange={handleBranchChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <option value="">Select a branch</option>
              {branchesData.map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {/* Grid Layout for Desktop */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branchesData.map((branch, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:transform hover:translate-y-2 transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {branch}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Explore courses in {branch.toLowerCase()}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            Featured Courses
          </h2>
          {loading ? (
            <p className="text-center text-gray-600 dark:text-gray-400">
              Loading courses...
            </p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <LazyLoad key={course.id} height={200} offset={100}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyCourseCard course={course} theme={theme} />
                  </Suspense>
                </LazyLoad>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomePage);
