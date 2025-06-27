import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin"); 
  };

  return (
    <nav className="navbar">
       <div className="logo">🎟️ <b>Eventify</b></div> 
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">My Tickets</a></li>
        <li>
          <Link to="/about">About Us</Link></li>
      </ul>
      <Button
        label="Sign In"
        className="p-button-sm p-button-primary"
        onClick={handleSignIn}
      />
    </nav>
  );
}