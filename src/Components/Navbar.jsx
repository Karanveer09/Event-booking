import React from 'react';
import { Button } from 'primereact/button';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎟️ <b>Eventify</b></div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Venues</a></li>
        <li><a href="#">My Tickets</a></li>
      </ul>
      <Button label="Sign In" className="p-button-sm p-button-primary" />
    </nav>
  );
}
