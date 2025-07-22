import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header" id="home">
      
      <div className="header-container">
          <a href="#home" className="logo">
            <img 
              src="/logo.png" 
              alt="ProjectDuniya Logo" 
              className="logo-image"
            />
          </a>

         

            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="hamburger" />
              <span className="hamburger" />
              <span className="hamburger" />
            </button>



        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* <a href="#home" className="nav-item" onClick={() => setMenuOpen(false)}>Home</a> */}
          <a href="https://rupankargarai2003.github.io/Projects-Ideas/" className="nav-item" onClick={() => setMenuOpen(false)}>Projects Ideas</a>
          <a href="#services" className="nav-item" onClick={() => setMenuOpen(false)}>Services</a> {/* ✅ anchor link */}
          <a href="#about" className="nav-item" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#heroform" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</a>
          
          
        </nav>

        <div className="contact-info">
          <ul className="contact-list">
            <li className="contact-item">
              <a href="tel:+918391808784">
                <i className="fas fa-phone-alt"></i> (+91) 8391808784
              </a>
            </li>
            <li className="contact-item">
              <a href="mailto:projectduniya.help@gmail.com">
                <i className="fas fa-envelope"></i> projectduniya.help@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
