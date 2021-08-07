import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)

        }
    })
    return () => {
        window.removeEventListener('scroll')
    }
}, [])
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://cdn.iconscout.com/icon/free/png-512/netflix-282224.png"
        alt="Netflix Logo"
      />
      <h3 className="nav__avatar">
        <span style={{ color: "firebrick" }}>Made By</span> <br /> A.Mutlib
      </h3>
    </div>
  );
}

export default Navbar;
