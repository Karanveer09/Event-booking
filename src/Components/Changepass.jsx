import React, { useState } from "react";
import "./Changepass.css"; 

const Changepass = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({ email, newPassword });
  };

  return (
    <div className="changepass-container">
      <div className="changepass-box">
        <h2 className="changepass-title">🔒 Reset Password</h2>
        <form onSubmit={handleSubmit} className="changepass-form">
          <label>Enter Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Set New Password</label>
          <input
            type="password"
            placeholder=""
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label>Confirm New Password</label>
          <input
            type="password"
            placeholder=""
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />

          <button type="submit" className="changepass-btn">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default Changepass;