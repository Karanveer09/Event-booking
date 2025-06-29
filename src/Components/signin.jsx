import React, { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ email, password });
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">🎟️ <b>Eventify</b></h2>
        <form onSubmit={handleSubmit} className="signin-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="signin-links">
            <span
              style={{ color: "#7b2ff7", cursor: "pointer" }}
              onClick={() => navigate("/changepass")}>Forgot Password?</span>
            <span
              style={{ color: "#7b2ff7", cursor: "pointer" }}
              onClick={() => navigate("/Signup")} 
            >
              Create Account
            </span>
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;