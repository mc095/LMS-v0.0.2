import axios from "axios";

const API_URL = "http://localhost:5173/api/auth";

const login = async (rollNumber, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    roll_number: rollNumber,
    password: password,
  });
  return response.data; // Ensure this returns { token, roll_number }
};

export default { login };