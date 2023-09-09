import { useState } from "react";
import "../styles/header.css";

export const Header = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <ul className="header__menu">
        <li>
          <a
            className="header__link"
            href="#home"
            onClick={() => scrollTo("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="header__link"
            href="#services"
            onClick={() => scrollTo("services")}
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="header__link"
            href="#about"
            onClick={() => scrollTo("about")}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="header__link"
            href="#contact"
            onClick={() => scrollTo("footer")}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="navigation">
        <ul style={{ display: menuOpen ? "block" : "none" }}>
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("about")}>About</li>
          <li onClick={() => scrollTo("services")}>Services</li>
          <li onClick={() => scrollTo("footer")}>Contact</li>
        </ul>

        <div className="hamburger">
          <button className="burger" onClick={toggleMenu}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
