import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import "../styles/fotter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="torn-top"></div>

      <div className="footer-row">
        {/* Left: Copyright Text */}
        <p className="copyright">
          Copyright © 2022, Yellow Wolf Tattoos
        </p>

        {/* Center: Logo Image */}
        <div className="logo-circle">
          <img src="/logo.png" alt="Yellow Wolf Logo" />
        </div>

        {/* Right: Social Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebookF /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
          <a href="https://www.twitter.com"><FaTwitter /></a>
          <a href="https://www.youtube.com"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
