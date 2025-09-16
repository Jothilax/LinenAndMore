import React, { useState } from "react";
import { Link } from "react-router-dom";  
import styles from "./header.module.css";
import Logo from "../../assets/logo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={Logo} alt="LAM Logo" className={styles.logoImg} />
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link></li>
          <li><Link to="/service" onClick={() => setIsOpen(false)}>INFRASTRUCTURE</Link></li>
          <li><Link to="/product" onClick={() => setIsOpen(false)}>OUR PRODUCTS</Link></li>
          <li><Link to="/pimaCotton" onClick={() => setIsOpen(false)}>PIMA COTTON</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
