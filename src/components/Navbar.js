import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="logo">&lt;AK /&gt;</div>
        <ul className="nav-links">
          <li>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, '#about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, '#skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, '#projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#achievements" 
              onClick={(e) => scrollToSection(e, '#achievements')}
              className={activeSection === 'achievements' ? 'active' : ''}
            >
              Achievements
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
