// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content flex-between">
        <div className="logo">
          Rucha<span>.Dev</span>
        </div>

        <div className="nav-links">
          {navigation.map((item) => (
            <a key={item.name} href={item.href}>{item.name}</a>
          ))}
          <a href="mailto:ahirerucha81@gmail.com" className="contact-btn">
            Get in touch <ArrowRight size={16} />
          </a>
        </div>

        <button onClick={toggleMenu} className="mobile-menu-btn">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
          <a href="mailto:ahirerucha81@gmail.com" style={{color: 'var(--accent-color)', display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            Let's Talk <ArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;