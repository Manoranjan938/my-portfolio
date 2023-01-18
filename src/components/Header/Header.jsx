import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Manoranjan
        </Link>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__lists">
            <li className="nav__item">
              <Link to="/" className="nav__link active_link">
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>

            <li className="nav__item">
              <Link to="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>

            <li className="nav__item">
              <Link to="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>

            {/* <li className="nav__item">
              <Link to="#" className="nav__link">
                <i className="uil uil-briefcase nav__icon"></i> Services
              </Link>
            </li> */}

            <li className="nav__item">
              <Link to="/projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projects
              </Link>
            </li>

            <li className="nav__item">
              <Link to="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact me
              </Link>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
