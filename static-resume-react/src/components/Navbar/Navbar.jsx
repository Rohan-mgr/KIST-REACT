import React from "react";
import "../../assets/css/Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav__logo__wrapper">
        <h2>RESUME</h2>
      </div>
      <ul className="nav__links__wrapper">
        <li>HOME /</li>
        <li>PORTFOLIO /</li>
        <li>SKILL /</li>
        <li>EDUCATION /</li>
        <li>CONTACT /</li>
        <li>BLOG</li>
      </ul>
    </div>
  );
}

export default Navbar;
