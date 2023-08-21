import { useState } from "react";
import "../styles/header.css";

export const Header = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer"); // Get the footer element
    footer.scrollIntoView({ behavior: "smooth" }); // Scroll to the footer smoothly
  };
  const scrollToAbout = () => {
    const about = document.getElementById("about");
    about.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    const footer = document.getElementById("home"); // Get the footer element
    footer.scrollIntoView({ behavior: "smooth" }); // Scroll to the footer smoothly
  };
  const scrollToServices = () => {
    const footer = document.getElementById("services"); // Get the footer element
    footer.scrollIntoView({ behavior: "smooth" }); // Scroll to the footer smoothly
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="header">
        <ul class="header__menu">
          <li>
            <a className="header__link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="header__link" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="header__link" href="#about" onClick={scrollToAbout}>
              About Us
            </a>
          </li>
          <li>
            <a
              className="header__link"
              href="#contact"
              onClick={scrollToFooter}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="navigation">
          <ul style={{ display: menuOpen ? "inline" : "none" }}>
            <li onClick={scrollToHome}>Home</li>
            <li onClick={scrollToAbout}>About</li>
            <li onClick={scrollToServices}>Services</li>
            <li onClick={scrollToFooter}>Contact</li>
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

        <style jsx>{`
        .navigation{
          display: none;
        }
   
          @media (min-width: 475px) {
           .navigation{
            display: flex;
            flex-direction: column-reverse;
           
            padding-left: 20px;
           
            position: relative; // Fixed the typo here
          
          }
          .navigation li{
            border-bottom: 1px solid white;
            width: 4rem;
            padding: 0.5rem;
            cursor: pointer;
            transition: color 0.3s;
            
            
          }
          .navigation li:hover{
     
    color: var(--clr-slate600);
  
          }
        `}</style>
      </nav>
    </>
  );
};

export default Header;
