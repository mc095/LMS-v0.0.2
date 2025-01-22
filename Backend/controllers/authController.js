const pool = require("../config/db");
const jwt = require("jsonwebtoken");
const env = require("../config/env");

const login = async (req, res) => {
  const { roll_number, password } = req.body;

  try {
    // Find the user by roll number
    const result = await pool.query(
      "SELECT * FROM lms_users WHERE roll_number = $1",
      [roll_number]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Invalid Roll Number or Password" });
    }

    const user = result.rows[0];

    // Check if the Password matches
    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid Roll Number or Password" });
    }

    // Generate a JWT
    const token = jwt.sign(
      { id: user.id, roll_number: user.roll_number },
      env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Return token and roll_number in the response
    res.json({ message: "Login successful", token, roll_number: user.roll_number });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

module.exports = { login };