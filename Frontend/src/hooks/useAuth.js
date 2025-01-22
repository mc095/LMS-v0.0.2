import { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (rollNumber, password) => {
    try {
      const data = await authService.login(rollNumber, password);

      // Store the token and rollNumber in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("rollNumber", data.roll_number); // Store the roll number

      // Redirect to the HomePage
      navigate("/HomePage");
    } catch (err) {
      setError("Invalid Roll Number or Password");
    }
  };

  return { handleLogin, error };
};

export default useAuth;