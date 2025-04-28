import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ ADD THIS
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Account created for ${email}`);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
