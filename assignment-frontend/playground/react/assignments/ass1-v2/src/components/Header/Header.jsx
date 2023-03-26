import React from "react";
import "./Header.css";
const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img
          src="https://clarusway.com/wp-content/uploads/2022/02/Adsiz-tasarim-4-300x78.png"
          alt="logo"
          className="logo"
        />
      </nav>
      <h1> Lesson Reminder</h1>
    </header>
  );
};

export default Navbar;
