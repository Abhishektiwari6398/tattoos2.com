'use client'
import React, { useState } from 'react';
import "../styles/navbar.css";
import "../styles/hero.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-hero-wrapper">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Yellow Wolf Logo" />
          <h1>Yellow Wolf</h1>
        </div>
        <nav className={isMenuOpen ? "nav-open" : ""}>
          <ul>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
            <li><a href="/About" onClick={() => setIsMenuOpen(false)}>ABOUT US</a></li>
            <li><a href="/artists" onClick={() => setIsMenuOpen(false)}>ARTISTS</a></li>
            <li><a href="#new" onClick={() => setIsMenuOpen(false)}>NEW DESIGNS</a></li>
            <li><a href="/gallery" onClick={() => setIsMenuOpen(false)}>GALLERY</a></li>
            <li><a href="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT US</a></li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className='heading-with-line'>
            <h1>CREATING GREAT TATTOOS</h1>
            <h2>FOR OVER <span>25 YEARS</span></h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore.</p>
          <div className="buttons">
            <button>Book Now</button>
            <button>View Gallery</button>
          </div>
        </div>
      </section>

      <img src="/torn-bootom.png" alt="Torn Edge" className="torn-png" />
    </div>
  );
}

export default Navbar;